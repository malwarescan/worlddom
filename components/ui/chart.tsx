"use client"

import * as React from "react"
import type { ChartTooltipProps, TooltipProps } from "recharts"
import type { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent"

import { cn } from "@/lib/utils"

export interface ChartConfig {
  [key: string]: {
    label: string
    color: string
  }
}

interface ChartContextValue {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextValue | null>(null)

function useChartContext() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error("useChartContext must be used within a ChartProvider")
  }

  return context
}

interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  config: ChartConfig
}

function ChartContainer({ config, className, children, ...props }: ChartContainerProps) {
  const value = React.useMemo(() => ({ config }), [config])

  return (
    <ChartContext.Provider value={value}>
      <div
        className={cn("h-[350px] w-full", className)}
        style={
          {
            "--color-views": config.views?.color,
            "--color-visitors": config.visitors?.color,
            "--color-sessions": config.sessions?.color,
          } as React.CSSProperties
        }
        {...props}
      >
        {children}
      </div>
    </ChartContext.Provider>
  )
}

function ChartTooltip({ content = <ChartTooltipContent />, ...props }: ChartTooltipProps<ValueType, NameType>) {
  return <ChartTooltipBase content={content} {...props} />
}

const ChartTooltipBase = React.forwardRef<HTMLDivElement, ChartTooltipProps<ValueType, NameType>>(
  ({ content, ...props }, ref) => {
    return (
      <div ref={ref} className="rounded-lg border bg-background p-2 shadow-sm" {...props}>
        {content}
      </div>
    )
  },
)
ChartTooltipBase.displayName = "ChartTooltipBase"

function ChartTooltipContent({ active, payload, label }: TooltipProps<ValueType, NameType>) {
  const { config } = useChartContext()

  if (!active || !payload?.length) {
    return null
  }

  return (
    <div className="space-y-2">
      <p className="text-xs font-medium text-muted-foreground">{label}</p>
      <div className="space-y-1">
        {payload.map((item) => {
          const key = item.dataKey as string
          const itemConfig = config[key]

          if (!itemConfig) {
            return null
          }

          return (
            <div key={key} className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full" style={{ backgroundColor: itemConfig.color }} />
              <p className="text-xs font-medium text-muted-foreground">
                {itemConfig.label}: <span className="font-medium text-foreground">{item.value}</span>
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { ChartContainer, ChartTooltip, ChartTooltipContent }

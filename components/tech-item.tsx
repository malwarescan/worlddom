interface TechItemProps {
  tech: string
}

export default function TechItem({ tech }: TechItemProps) {
  return (
    <li className="flex items-center">
      <div className="w-2 h-2 bg-blue-500 mr-3 rounded-full"></div>
      <span className="text-neutral-700 dark:text-neutral-300">{tech}</span>
    </li>
  )
}


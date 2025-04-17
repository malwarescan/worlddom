import type { ReactNode } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

import { SidebarDashboardProvider } from "app/core/contexts/SidebarDashboardContext"
import { DashboardLayout } from "app/core/layouts/DashboardLayout"
import { Performa } from "app/dashboard/components/Performa"
import { BlitzPage } from "blitz"
import { Suspense } from "react"

const PengeluaranPage: BlitzPage = () => {
  return (
    <section className="font-sans">
      <h1 className="font-bold text-2xl">Performa Keseluruhan Toko</h1>
      <Performa />
    </section>
  )
}

PengeluaranPage.getLayout = (page) => (
  <SidebarDashboardProvider>
    <DashboardLayout>
      <Suspense fallback="Loading...">{page}</Suspense>
    </DashboardLayout>
  </SidebarDashboardProvider>
)
PengeluaranPage.suppressFirstRenderFlicker = true
export default PengeluaranPage

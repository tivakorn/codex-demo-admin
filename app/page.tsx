import {
  ArrowDownRight,
  ArrowUpRight,
  BadgeDollarSign,
  BarChart3,
  Boxes,
  Edit3,
  Eye,
  LayoutDashboard,
  PackagePlus,
  Search,
  ShoppingCart,
  Trash2,
  UsersRound,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const stats = [
  {
    label: "ยอดขายรวม",
    value: "฿1,284,500",
    change: "+18.4%",
    trend: "up",
    icon: BadgeDollarSign,
    helper: "เทียบกับเดือนก่อน",
  },
  {
    label: "ออเดอร์ใหม่",
    value: "2,418",
    change: "+9.2%",
    trend: "up",
    icon: ShoppingCart,
    helper: "รอจัดส่ง 146 รายการ",
  },
  {
    label: "สินค้าทั้งหมด",
    value: "684",
    change: "+32 SKU",
    trend: "up",
    icon: Boxes,
    helper: "มีสินค้าใกล้หมด 12 SKU",
  },
  {
    label: "ลูกค้าใหม่",
    value: "9,842",
    change: "-2.1%",
    trend: "down",
    icon: UsersRound,
    helper: "จากแคมเปญ social",
  },
];

const monthlySales = [42, 58, 46, 72, 68, 88, 78, 96, 84, 112, 105, 128];
const months = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];

const products = [
  { name: "Macintosh Tote Bag", sku: "MC-BAG-014", sales: "฿182,400", stock: 128, status: "พร้อมขาย", conversion: 82 },
  { name: "Purple Desk Lamp", sku: "PDL-392", sales: "฿156,900", stock: 42, status: "ขายดี", conversion: 76 },
  { name: "Classic Keyboard Mat", sku: "CKM-088", sales: "฿98,200", stock: 18, status: "ใกล้หมด", conversion: 64 },
  { name: "Retro Pixel Mug", sku: "RPM-104", sales: "฿74,500", stock: 0, status: "หมดสต็อก", conversion: 31 },
];

const channels = [
  { name: "Marketplace", value: "฿582K", percent: 45 },
  { name: "เว็บไซต์", value: "฿392K", percent: 31 },
  { name: "Social commerce", value: "฿210K", percent: 16 },
  { name: "หน้าร้าน", value: "฿100K", percent: 8 },
];

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: PackagePlus, label: "จัดการสินค้า" },
  { icon: ShoppingCart, label: "คำสั่งซื้อ" },
  { icon: BarChart3, label: "รายงานยอดขาย" },
];

const activity = [
  "เพิ่มสินค้าใหม่ 8 รายการในหมวด Retro Office",
  "แก้ไขราคาสินค้า Purple Desk Lamp เป็น ฿2,490",
  "ลบ SKU ทดลองขายที่หมดแคมเปญ 3 รายการ",
  "อนุมัติคำสั่งซื้อแบบ bulk จากลูกค้าองค์กร",
];

function statusVariant(status: string) {
  if (status === "หมดสต็อก") return "destructive" as const;
  if (status === "ใกล้หมด") return "outline" as const;
  return "secondary" as const;
}

export default function AdminDashboard() {
  return (
    <main className="min-h-screen p-4 text-[#24213d] md:p-6 lg:p-8">
      <div className="mx-auto flex max-w-7xl overflow-hidden rounded-[2rem] border border-[#3c3963]/25 bg-[#ecebe4]/88 shadow-2xl shadow-[#3c3963]/20 backdrop-blur">
        <aside className="hidden w-72 flex-col justify-between border-r border-[#3c3963]/20 bg-[#3c3963] p-6 text-[#f2ead6] lg:flex">
          <div>
            <div className="mb-10 flex items-center gap-3">
              <div className="grid size-12 place-items-center rounded-2xl border border-white/20 bg-white/10 font-mono text-xl shadow-inner">⌘</div>
              <div>
                <p className="text-sm text-white/70">Macintosh Store</p>
                <h1 className="text-xl font-semibold">Admin OS</h1>
              </div>
            </div>
            <nav className="space-y-2 text-sm">
              {navItems.map(({ icon: Icon, label }) => (
                <a key={label} className="flex items-center gap-3 rounded-2xl px-4 py-3 text-white/78 transition hover:bg-white/10 first:bg-white/15 first:text-white" href="#">
                  <Icon className="size-4" />
                  {label}
                </a>
              ))}
            </nav>
          </div>
          <Card className="border-white/15 bg-white/10 py-4 text-[#f2ead6] shadow-none">
            <CardContent className="space-y-3 px-4">
              <p className="text-sm font-medium">เป้าหมายรายเดือน</p>
              <Progress value={78} className="bg-white/20 [&_[data-slot=progress-indicator]]:bg-[#f2ead6]" />
              <p className="text-xs text-white/70">ทำได้แล้ว 78% จากเป้า ฿1.65M</p>
            </CardContent>
          </Card>
        </aside>

        <section className="flex-1 space-y-6 p-5 md:p-8">
          <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <Badge className="mb-3 bg-[#3c3963]/10 text-[#3c3963] hover:bg-[#3c3963]/10">shadcn design system · #3c3963</Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">ระบบ Admin ลงขายสินค้า</h2>
              <p className="mt-2 text-muted-foreground">สร้าง ลบ แก้ไข ดูข้อมูลสินค้า พร้อม dashboard วิเคราะห์ยอดขายแบบครบจบในหน้าเดียว</p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button variant="outline" className="border-[#3c3963]/30 bg-[#f4f0e7]/70 text-[#3c3963]">
                <Eye /> ดูหน้าร้าน
              </Button>
              <Button className="bg-[#3c3963] text-[#f4f0e7] hover:bg-[#302e52]">
                <PackagePlus /> สร้างสินค้า
              </Button>
            </div>
          </header>

          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => {
              const Icon = item.icon;
              const isUp = item.trend === "up";
              return (
                <Card key={item.label} className="border-[#3c3963]/15 bg-[#f4f0e7]/80 shadow-[#3c3963]/10">
                  <CardHeader className="flex-row items-center justify-between space-y-0">
                    <CardDescription>{item.label}</CardDescription>
                    <div className="rounded-xl bg-[#3c3963]/10 p-2 text-[#3c3963]">
                      <Icon className="size-4" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{item.value}</div>
                    <div className="mt-3 flex items-center gap-2 text-sm">
                      <span className={isUp ? "flex items-center gap-1 text-emerald-700" : "flex items-center gap-1 text-rose-700"}>
                        {isUp ? <ArrowUpRight className="size-4" /> : <ArrowDownRight className="size-4" />}
                        {item.change}
                      </span>
                      <span className="text-muted-foreground">{item.helper}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </section>

          <section className="grid gap-6 xl:grid-cols-[1.55fr_0.95fr]">
            <Card className="border-[#3c3963]/15 bg-[#f4f0e7]/80">
              <CardHeader className="md:flex-row md:items-start md:justify-between">
                <div>
                  <CardTitle>Dashboard ยอดขายรายเดือน</CardTitle>
                  <CardDescription>รายได้สุทธิจากทุกช่องทาง หน่วย: พันบาท</CardDescription>
                </div>
                <Badge variant="outline" className="border-[#3c3963]/25 text-[#3c3963]">อัปเดตล่าสุดวันนี้</Badge>
              </CardHeader>
              <CardContent>
                <div className="flex h-72 items-end gap-3 rounded-3xl border border-[#3c3963]/10 bg-[#d8d7d0]/45 p-4">
                  {monthlySales.map((value, index) => (
                    <div key={months[index]} className="flex h-full flex-1 flex-col justify-end gap-2">
                      <div className="rounded-t-2xl bg-[#3c3963] shadow-lg shadow-[#3c3963]/20 transition hover:bg-[#514d7b]" style={{ height: `${value / 1.35}%` }} title={`${months[index]} ${value}K`} />
                      <span className="text-center text-xs text-muted-foreground">{months[index]}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#3c3963]/15 bg-[#f4f0e7]/80">
              <CardHeader>
                <CardTitle>ยอดขายตามช่องทาง</CardTitle>
                <CardDescription>ดูข้อมูลเพื่อปรับแผนการขาย</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                {channels.map((channel) => (
                  <div key={channel.name} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{channel.name}</span>
                      <span className="text-muted-foreground">{channel.value}</span>
                    </div>
                    <Progress value={channel.percent} className="bg-[#3c3963]/12" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>

          <section className="grid gap-6 xl:grid-cols-[1.45fr_1fr]">
            <Card className="border-[#3c3963]/15 bg-[#f4f0e7]/80">
              <CardHeader className="gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <CardTitle>จัดการสินค้า</CardTitle>
                  <CardDescription>รองรับการสร้าง แก้ไข ลบ และตรวจสอบสถานะสต็อก</CardDescription>
                </div>
                <div className="relative w-full md:w-72">
                  <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input className="border-[#3c3963]/20 bg-[#ecebe4] pl-9" placeholder="ค้นหาสินค้าหรือ SKU" />
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>สินค้า</TableHead>
                      <TableHead>ยอดขาย</TableHead>
                      <TableHead>สต็อก</TableHead>
                      <TableHead>สถานะ</TableHead>
                      <TableHead className="text-right">การจัดการ</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.map((product) => (
                      <TableRow key={product.sku}>
                        <TableCell>
                          <div className="font-medium">{product.name}</div>
                          <div className="text-xs text-muted-foreground">{product.sku}</div>
                        </TableCell>
                        <TableCell>{product.sales}</TableCell>
                        <TableCell>{product.stock}</TableCell>
                        <TableCell>
                          <Badge variant={statusVariant(product.status)}>{product.status}</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button size="icon" variant="ghost" aria-label={`ดู ${product.name}`}>
                              <Eye className="size-4" />
                            </Button>
                            <Button size="icon" variant="ghost" aria-label={`แก้ไข ${product.name}`}>
                              <Edit3 className="size-4" />
                            </Button>
                            <Button size="icon" variant="ghost" className="text-destructive hover:text-destructive" aria-label={`ลบ ${product.name}`}>
                              <Trash2 className="size-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card className="border-[#3c3963]/15 bg-[#f4f0e7]/80">
              <CardHeader>
                <CardTitle>ภาพรวมการทำงานล่าสุด</CardTitle>
                <CardDescription>บันทึกกิจกรรมสำหรับทีม admin</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {activity.map((item, index) => (
                  <div key={item} className="flex gap-3 rounded-2xl border border-[#3c3963]/10 bg-[#ecebe4]/75 p-3">
                    <div className="grid size-8 shrink-0 place-items-center rounded-full bg-[#3c3963] text-sm font-semibold text-[#f4f0e7]">{index + 1}</div>
                    <p className="text-sm leading-6">{item}</p>
                  </div>
                ))}
                <div className="rounded-3xl bg-[#3c3963] p-5 text-[#f4f0e7]">
                  <p className="text-sm text-white/70">คำแนะนำจาก dashboard</p>
                  <p className="mt-2 text-lg font-semibold">เติมสต็อก Classic Keyboard Mat ก่อนแคมเปญ 5.5 เพื่อรักษายอดขายช่องทาง Marketplace</p>
                </div>
              </CardContent>
            </Card>
          </section>
        </section>
      </div>
    </main>
  );
}

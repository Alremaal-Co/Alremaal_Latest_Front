"use client"

import {
  User,
  MessageSquare,
  Clock,
  HelpCircle,
  Wallet,
  Settings,
  LogOut,
  Hand,
  ChevronsUpDown,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

type UserData = {
  name: string
  role: string
  avatar: string
}

const content = {
  ar: {
    welcome: "مرحباً محمود ",
    profile: "الملف الشخصي",
    messages: "الرسائل",
    tasks: "لوحة المهام",
    help: "مساعدة",
    balance: "الرصيد",
    settings: "الإعدادات",
    logout: "تسجيل الخروج",
  },
  en: {
    welcome: "Welcome Anna!",
    profile: "Profile",
    messages: "Messages",
    tasks: "Tasks Dashboard",
    help: "Help",
    balance: "Balance:",
    settings: "Settings",
    logout: "Log Out",
  },
}

export function NavUser({
  user,
  dir = "rtl", 
}: {
  user: UserData
  dir?: "rtl" | "ltr"
}) {
  const t = dir === "rtl" ? content.ar : content.en

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={`flex h-auto items-center justify-center gap-3 rounded-lg bg-gray-100 px-3 py-2 dark:bg-gray-800 ltr:flex-row-reverse`}
        >
          <div className="relative">
            <Avatar className="h-10 w-10">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white" />
          </div>

          <div className="flex justify-between items-center gap-4">
            <div className={`grid flex-1 leading-tight ltr:text-left rtl:text-right`}>
              <span className="truncate font-semibold text-primary dark:text-white">
                {user.name}
              </span>
              <span className="text-muted-foreground truncate text-xs">
                {user.role}
              </span>
            </div>
            <ChevronsUpDown className="text-primary dark:text-white" />
          </div>

        </Button>
      </DropdownMenuTrigger>

      {/* محتوى القائمة المنسدلة */}
      <DropdownMenuContent
        className="w-56 rounded border-gray-200 p-2 shadow-lg dark:border-gray-700"
        side="bottom"
        align={`${dir === "rtl" ? "start":"end"}`}
        sideOffset={10}
      >
        <DropdownMenuGroup>
          {/* <DropdownMenuItem className="flex cursor-pointer justify-end text-sm">
            <span>{t.welcome}</span>
            <Hand className="h-5 w-5 text-gray-400" />
          </DropdownMenuItem> */}
          <DropdownMenuItem className="flex cursor-pointer rtl:flex-row-reverse text-sm">
            <User className="h-5 w-5 text-gray-400" />
            <span>{t.profile}</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex cursor-pointer rtl:flex-row-reverse text-sm">
            <MessageSquare className="h-5 w-5 text-gray-400" />
            <span>{t.messages}</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex cursor-pointer rtl:flex-row-reverse text-sm">
            <Clock className="h-5 w-5 text-gray-400" />
            <span>{t.tasks}</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex cursor-pointer rtl:flex-row-reverse  text-sm">
            <HelpCircle className="h-5 w-5 text-gray-400" />
            <span>{t.help}</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator className="my-2" />

        <DropdownMenuGroup>
          {/* عنصر الرصيد بتصميم خاص */}
          <div className="flex items-center rtl:flex-row-reverse  gap-1 px-2 py-1.5 text-sm">
            <Wallet className="h-5 w-5 text-gray-400 " />
            <div className={`flex items-center gap-2 `}>
              <span>{t.balance}</span>
              <span className="font-mono text-lg font-extrabold w-1/2 text-primary flex rtl:justify-start ltr:justify-end items-center gap-1 absolute ltr:right-2 rtl:left-2 ">
                 <span>ريال</span>15258
              </span>
            </div>
          </div>

          {/* عنصر الإعدادات مع الشارة */}
          <DropdownMenuItem className="flex cursor-pointer rtl:flex-row-reverse text-sm">
            <Settings className="h-5 w-5 text-gray-400" />
            <div className={`flex items-center gap-2`}>
              <span>{t.settings}</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs text-white gap-1 absolute ltr:right-0 rtl:left-0">
                5
              </span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator className="my-2" />

        <DropdownMenuItem className="flex cursor-pointer ltr:justify-start  rtl:flex-row-reverse text-sm text-red-500 focus:bg-red-50 focus:text-red-600 dark:focus:bg-red-900/50 dark:focus:text-red-400">
          <LogOut className="h-5 w-5" />
          <span>{t.logout}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
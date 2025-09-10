"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Bell } from "lucide-react";

// بيانات وهمية، يمكنك استبدالها ببيانات حقيقية
const notifications = [
    { user: "John Doe", action: "commented on your post", time: "1h ago", avatar: "https://github.com/shadcn.png" },
    { user: "Jane Smith", action: "sent you a message", time: "2h ago", avatar: "https://github.com/shadcn.png" },
    { user: "Admin", action: "New update is available", time: "1d ago", avatar: "" },
];

export function NotificationsDropdown() {
  const hasUnread = true; // يمكنك ربط هذا بالحالة الفعلية

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          {hasUnread && <span className="absolute top-2 right-2.5 h-2 w-2 rounded-full bg-primary" />}
          <Bell className="h-[1.2rem] w-[1.2rem] text-primary dark:text-white" />
          <span className="sr-only">Notifications</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
          showArrow={true} 
          align="center" 
          className="w-80"
          side="bottom"
          sideOffset={20}
      >
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {notifications.map((n, i) => (
            <DropdownMenuItem key={i} className="flex items-start gap-3 p-2">
                 <Avatar className="h-8 w-8">
                    <AvatarImage src={n.avatar} />
                    <AvatarFallback>{n.user.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-sm font-medium">{n.user}</p>
                    <p className="text-xs text-muted-foreground">{n.action}</p>
                    <p className="text-xs text-muted-foreground/80 mt-1">{n.time}</p>
                </div>
            </DropdownMenuItem>
        ))}
         <DropdownMenuSeparator />
         <DropdownMenuItem className="justify-center">View all notifications</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
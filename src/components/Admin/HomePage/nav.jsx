import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@radix-ui/react-navigation-menu";
  import {
    Boxes,
    PlusCircle,
    Trash2,
    Users2,
    UserMinus,
    LayoutDashboard,
    MoveRightIcon,
    MoveRight,
    ChevronRight,
  } from "lucide-react";
  
  export default function AdminSidebar() {
    return (
      <NavigationMenu
        orientation="vertical"
        className="fixed left-0 top-0 h-screen w-64
                   bg-white dark:bg-zinc-900
                   text-zinc-700 dark:text-zinc-200
                   border-r border-zinc-200 dark:border-zinc-800
                   flex flex-col shadow-md z-50"
      >
        {/* Dashboard Heading */}
        <div className="h-16 flex items-center gap-2 px-6 text-lg font-semibold border-b border-zinc-300 dark:border-zinc-700">
          <LayoutDashboard className="w-5 h-5" />
          Admin Panel
        </div>
  
        {/* Navigation List */}
        <NavigationMenuList className="flex-1 flex flex-col px-4 py-6 gap-4 overflow-y-auto">
  
          {/* Products Menu */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="w-full flex items-center cursor-pointer text-2xl gap-2 px-3 py-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800">
              <Boxes className="w-4 h-4" />
              Products              
              <ChevronRight className="h-6 w-6" />
            </NavigationMenuTrigger>
            <NavigationMenuContent className="pl-6 flex flex-col gap-1 mt-1">
              <NavigationMenuLink className="flex items-center cursor-pointer gap-2 px-3 py-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800">
                <Boxes className="w-4 h-4" />
                All Products
              </NavigationMenuLink>
              <NavigationMenuLink className="flex items-center cursor-pointer gap-2 px-3 py-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800">
                <PlusCircle className="w-4 h-4" />
                Add Product
              </NavigationMenuLink>
              <NavigationMenuLink className="flex items-center cursor-pointer gap-2 px-3 py-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800">
                <Trash2 className="w-4 h-4" />
                Remove Product
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
  
          {/* Users Menu */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="w-full flex cursor-pointer text-2xl items-center gap-2 px-3 py-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800">
              <Users2 className="w-4 h-4" />
              Users
            </NavigationMenuTrigger>
            <NavigationMenuContent className="pl-6 flex flex-col gap-1 mt-1">
              <NavigationMenuLink className="flex items-center cursor-pointer gap-2 px-3 py-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800">
                <Users2 className="w-4 h-4" />
                All Users
              </NavigationMenuLink>
              <NavigationMenuLink className="flex items-center cursor-pointer gap-2 px-3 py-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800">
                <UserMinus className="w-4 h-4" />
                Remove User
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
  
        </NavigationMenuList>
      </NavigationMenu>
    );
  }
  
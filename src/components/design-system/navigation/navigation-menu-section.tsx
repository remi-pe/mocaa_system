import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function NavigationMenuSection() {
  return (
    <SectionWrapper
      id="navigation-menu"
      title="Navigation Menu"
      description="A collection of links for navigating websites."
    >
      <ComponentPreview title="Horizontal Nav with Dropdown">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink render={<a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="#"
                      />}>
                        <div className="mb-2 mt-4 text-lg font-medium">
                          shadcn/ui
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components built with Radix and
                          Tailwind CSS.
                        </p>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink render={<a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" />}>
                        <div className="text-sm font-medium leading-none">Introduction</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Re-usable components built using Radix UI and Tailwind CSS.
                        </p>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink render={<a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" />}>
                        <div className="text-sm font-medium leading-none">Installation</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          How to install dependencies and structure your app.
                        </p>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-2">
                  <li>
                    <NavigationMenuLink render={<a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" />}>
                        <div className="text-sm font-medium leading-none">Alert Dialog</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          A modal dialog that interrupts the user.
                        </p>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink render={<a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" />}>
                        <div className="text-sm font-medium leading-none">Hover Card</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          For sighted users to preview content.
                        </p>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
              >
                Documentation
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </ComponentPreview>
    </SectionWrapper>
  );
}

import { SidebarNav } from "@/components/design-system/sidebar-nav";
import { MobileNav } from "@/components/design-system/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";

// Foundations
import { ColorsSection } from "@/components/design-system/foundations/colors-section";
import { TypographySection } from "@/components/design-system/foundations/typography-section";
import { SpacingSection } from "@/components/design-system/foundations/spacing-section";
import { BordersRadiusSection } from "@/components/design-system/foundations/borders-radius-section";
import { ShadowsSection } from "@/components/design-system/foundations/shadows-section";
import { IconsSection } from "@/components/design-system/foundations/icons-section";

// Actions
import { ButtonSection } from "@/components/design-system/actions/button-section";
import { ToggleSection } from "@/components/design-system/actions/toggle-section";
import { ToggleGroupSection } from "@/components/design-system/actions/toggle-group-section";
import { ThemeSwitchSection } from "@/components/design-system/actions/theme-switch-section";

// Forms
import { InputSection } from "@/components/design-system/forms/input-section";
import { TextareaSection } from "@/components/design-system/forms/textarea-section";
import { SelectSection } from "@/components/design-system/forms/select-section";
import { CheckboxSection } from "@/components/design-system/forms/checkbox-section";
import { RadioGroupSection } from "@/components/design-system/forms/radio-group-section";
import { SwitchSection } from "@/components/design-system/forms/switch-section";
import { SliderSection } from "@/components/design-system/forms/slider-section";
import { LabelSection } from "@/components/design-system/forms/label-section";
import { FormSection } from "@/components/design-system/forms/form-section";
import { InputOTPSection } from "@/components/design-system/forms/input-otp-section";
import { CalendarSection } from "@/components/design-system/forms/calendar-section";
import { DatePickerSection } from "@/components/design-system/forms/date-picker-section";

// Data Display
import { BadgeSection } from "@/components/design-system/data-display/badge-section";
import { AvatarSection } from "@/components/design-system/data-display/avatar-section";
import { TableSection } from "@/components/design-system/data-display/table-section";
import { DataTableSection } from "@/components/design-system/data-display/data-table-section";
import { CardSection } from "@/components/design-system/data-display/card-section";
import { AspectRatioSection } from "@/components/design-system/data-display/aspect-ratio-section";
import { CarouselSection } from "@/components/design-system/data-display/carousel-section";
import { SeparatorSection } from "@/components/design-system/data-display/separator-section";
import { SkeletonSection } from "@/components/design-system/data-display/skeleton-section";
import { ProgressSection } from "@/components/design-system/data-display/progress-section";

// Feedback
import { AlertSection } from "@/components/design-system/feedback/alert-section";
import { AlertDialogSection } from "@/components/design-system/feedback/alert-dialog-section";
import { DialogSection } from "@/components/design-system/feedback/dialog-section";
import { SonnerSection } from "@/components/design-system/feedback/sonner-section";
import { DrawerSection } from "@/components/design-system/feedback/drawer-section";
import { SheetSection } from "@/components/design-system/feedback/sheet-section";

// Navigation
import { TabsSection } from "@/components/design-system/navigation/tabs-section";
import { AccordionSection } from "@/components/design-system/navigation/accordion-section";
import { BreadcrumbSection } from "@/components/design-system/navigation/breadcrumb-section";
import { CommandSection } from "@/components/design-system/navigation/command-section";
import { ContextMenuSection } from "@/components/design-system/navigation/context-menu-section";
import { DropdownMenuSection } from "@/components/design-system/navigation/dropdown-menu-section";
import { MenubarSection } from "@/components/design-system/navigation/menubar-section";
import { NavigationMenuSection } from "@/components/design-system/navigation/navigation-menu-section";
import { PaginationSection } from "@/components/design-system/navigation/pagination-section";

// Layout
import { CollapsibleSection } from "@/components/design-system/layout/collapsible-section";
import { ResizableSection } from "@/components/design-system/layout/resizable-section";
import { ScrollAreaSection } from "@/components/design-system/layout/scroll-area-section";

// Overlay
import { HoverCardSection } from "@/components/design-system/overlay/hover-card-section";
import { PopoverSection } from "@/components/design-system/overlay/popover-section";
import { TooltipSection } from "@/components/design-system/overlay/tooltip-section";

export default function DesignSystemPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MobileNav />
      <div className="flex flex-1">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-64 shrink-0 border-r">
          <div className="sticky top-0 h-screen overflow-y-auto p-6">
            <h1 className="mb-4 text-xl font-bold">mocaa_ui_system</h1>
            <div className="mb-6">
              <ThemeToggle />
            </div>
            <SidebarNav />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-6 py-10 lg:px-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8">
              <h1 className="hidden text-4xl font-extrabold tracking-tight lg:block">
                mocaa_ui_system
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">
                A comprehensive design system built on shadcn/ui. Browse
                foundations, tokens, and components — your single source of
                truth.
              </p>
            </div>

            {/* Foundations */}
            <ColorsSection />
            <TypographySection />
            <SpacingSection />
            <BordersRadiusSection />
            <ShadowsSection />
            <IconsSection />

            {/* Actions */}
            <ButtonSection />
            <ToggleSection />
            <ToggleGroupSection />
            <ThemeSwitchSection />

            {/* Forms */}
            <InputSection />
            <TextareaSection />
            <SelectSection />
            <CheckboxSection />
            <RadioGroupSection />
            <SwitchSection />
            <SliderSection />
            <LabelSection />
            <FormSection />
            <InputOTPSection />
            <CalendarSection />
            <DatePickerSection />

            {/* Data Display */}
            <BadgeSection />
            <AvatarSection />
            <TableSection />
            <DataTableSection />
            <CardSection />
            <AspectRatioSection />
            <CarouselSection />
            <SeparatorSection />
            <SkeletonSection />
            <ProgressSection />

            {/* Feedback */}
            <AlertSection />
            <AlertDialogSection />
            <DialogSection />
            <SonnerSection />
            <DrawerSection />
            <SheetSection />

            {/* Navigation */}
            <TabsSection />
            <AccordionSection />
            <BreadcrumbSection />
            <CommandSection />
            <ContextMenuSection />
            <DropdownMenuSection />
            <MenubarSection />
            <NavigationMenuSection />
            <PaginationSection />

            {/* Layout */}
            <CollapsibleSection />
            <ResizableSection />
            <ScrollAreaSection />

            {/* Overlay */}
            <HoverCardSection />
            <PopoverSection />
            <TooltipSection />
          </div>
        </main>
      </div>
    </div>
  );
}

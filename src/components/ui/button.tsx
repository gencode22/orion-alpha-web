import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Orion Alpha button system.
 *
 * Variants:
 *   default    — cyan filled, soft glow (primary CTA, e.g. "Open Telegram Bot")
 *   discord    — Discord blurple #5865F2 (only acceptable non-cyan accent: brand color)
 *   outline    — surface fill + border, hover-cyan (secondary CTA, e.g. "Live Showcase")
 *   secondary  — surface + subtle border, no glow (tertiary, e.g. "See Pricing")
 *   ghost      — text-only with hover bg (in-card actions)
 *   link       — underlined text link
 *   destructive— red (error states)
 *
 * Sizes (height-anchored, all touch-target friendly at sm+):
 *   default — h-9  px-4   (36px) general UI
 *   sm      — h-8  px-3   (32px) compact
 *   lg      — h-11 px-6   (44px) landing CTAs — the canonical Orion CTA size
 *   xl      — h-12 px-7   (48px) hero CTAs
 *   icon    — square 36px
 *
 * Use `asChild` to render the variant on an <a> or <Link> instead of a <button>.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[10px] font-semibold transition-all duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([width])]:w-[1.1em] [&_svg:not([height])]:h-[1.1em]",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-[#0b1120] shadow-[0_0_16px_rgba(0,180,196,0.30),0_4px_16px_rgba(0,180,196,0.20)] hover:-translate-y-px hover:shadow-[0_0_28px_rgba(0,180,196,0.55),0_6px_20px_rgba(0,180,196,0.30)]",
        discord:
          "bg-[#5865F2] text-white shadow-[0_4px_16px_rgba(88,101,242,0.20)] hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(88,101,242,0.30)] hover:bg-[#4752c4]",
        outline:
          "bg-surface text-foreground border border-border hover:border-primary/45 hover:text-primary hover:bg-primary/[0.06]",
        secondary:
          "bg-surface text-foreground border border-border hover:border-primary/50 hover:text-primary",
        ghost:
          "hover:bg-primary/10 hover:text-primary",
        link:
          "text-primary underline-offset-4 hover:underline",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
      },
      size: {
        default: "h-9 px-4 text-sm",
        sm:      "h-8 px-3 text-xs",
        lg:      "h-11 px-6 text-sm",
        xl:      "h-12 px-7 text-base",
        icon:    "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

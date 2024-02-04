import * as React from 'react'
import { cn } from '@/lib/utils'

// eslint-disable-next-line react/display-name
const Divider = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn('w-full h-px bg-[#9B989830]', className)}
        {...props}
    />
))

export default Divider

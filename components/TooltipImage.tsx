import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"

const TooltipImage = ({
    children,
    tooltipText
  }: Readonly<{
    children: React.ReactNode;
    tooltipText: string;
  }>) => {
  return (
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>
                {children}
            </TooltipTrigger>
            <TooltipContent>
                <p className='text-dark-100'>{tooltipText}</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
  )
}

export default TooltipImage
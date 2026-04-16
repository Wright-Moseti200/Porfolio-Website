import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

const Toaster = ({
  ...props
}) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme}
      position="top-center"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-black group-[.toaster]:text-white group-[.toaster]:border-black group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-gray-300",
          actionButton:
            "group-[.toast]:bg-white group-[.toast]:text-black hover:opacity-90 transition-opacity",
          cancelButton:
            "group-[.toast]:bg-zinc-800 group-[.toast]:text-gray-300 hover:opacity-90",
        },
      }}
      {...props} />
  );
}

export { Toaster }

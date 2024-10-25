import { tailwindClassMerge } from "@/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariant = cva(
  "inline-flex items-center rounded-md font-semibold duration-200 ",
  {
    variants: {
      variant: {
        primary: "text-white bg-black dark:bg-white dark:text-black ",
        outline:
          "text-black bg-transparent dark:text-white ",
        destructive:
          "bg-red-600 text-black dark:bg-red-800 dark:text-white",
      },
      size: {
        xs: "px-2 text-xs h-6",
        sm: "px-6 text-sm h-8",
        base: "px-4 text-base h-10",
        lg: "px-6 text-lg h-12",
      },
      fullWidth: { true: "w-full justify-center" },
    },

    defaultVariants: {
      variant: "primary",
      size: "base",
    },
  }
);

interface IProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariant> {
  children: React.ReactNode;
}

const Button = ({
  children,
  variant: intent,
  size,
  fullWidth,
  ...rest
}: IProps) => {
  return (
    <button
      className={`${tailwindClassMerge(
        buttonVariant({ variant: intent, size, fullWidth })
      )}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

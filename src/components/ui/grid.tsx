import * as React from "react";
import { cn } from "@/lib/utils";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: "sm" | "md" | "lg" | "xl";
  responsive?: boolean;
}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols = 1, gap = "md", responsive = true, ...props }, ref) => {
    const gridClasses = cn(
      "grid",
      // Base columns
      {
        "grid-cols-1": cols === 1,
        "grid-cols-2": cols === 2,
        "grid-cols-3": cols === 3,
        "grid-cols-4": cols === 4,
        "grid-cols-5": cols === 5,
        "grid-cols-6": cols === 6,
      },
      // Responsive columns (if enabled)
      responsive && {
        "sm:grid-cols-2": cols >= 2,
        "md:grid-cols-3": cols >= 3,
        "lg:grid-cols-4": cols >= 4,
        "xl:grid-cols-5": cols >= 5,
        "2xl:grid-cols-6": cols >= 6,
      },
      // Gap sizes
      {
        "gap-2": gap === "sm",
        "gap-4": gap === "md", 
        "gap-6": gap === "lg",
        "gap-8": gap === "xl",
      },
      className
    );

    return <div ref={ref} className={gridClasses} {...props} />;
  }
);
Grid.displayName = "Grid";

interface CompactGridProps extends React.HTMLAttributes<HTMLDivElement> {
  minWidth?: string;
  gap?: "xs" | "sm" | "md" | "lg";
}

const CompactGrid = React.forwardRef<HTMLDivElement, CompactGridProps>(
  ({ className, minWidth = "280px", gap = "sm", ...props }, ref) => {
    const gapClasses = {
      "xs": "gap-1",
      "sm": "gap-2", 
      "md": "gap-3",
      "lg": "gap-4",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "grid auto-fit-grid",
          gapClasses[gap],
          className
        )}
        style={{
          gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}, 1fr))`,
        }}
        {...props}
      />
    );
  }
);
CompactGrid.displayName = "CompactGrid";

interface FlexGridProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  align?: "start" | "center" | "end" | "stretch";
  wrap?: boolean;
}

const FlexGrid = React.forwardRef<HTMLDivElement, FlexGridProps>(
  ({ 
    className, 
    gap = "md", 
    justify = "start", 
    align = "start", 
    wrap = true,
    ...props 
  }, ref) => {
    const flexClasses = cn(
      "flex",
      wrap && "flex-wrap",
      // Gap classes
      {
        "gap-1": gap === "xs",
        "gap-2": gap === "sm",
        "gap-4": gap === "md",
        "gap-6": gap === "lg",
        "gap-8": gap === "xl",
      },
      // Justify classes
      {
        "justify-start": justify === "start",
        "justify-center": justify === "center",
        "justify-end": justify === "end",
        "justify-between": justify === "between",
        "justify-around": justify === "around",
        "justify-evenly": justify === "evenly",
      },
      // Align classes
      {
        "items-start": align === "start",
        "items-center": align === "center",
        "items-end": align === "end",
        "items-stretch": align === "stretch",
      },
      className
    );

    return <div ref={ref} className={flexClasses} {...props} />;
  }
);
FlexGrid.displayName = "FlexGrid";

interface MasonryGridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
}

const MasonryGrid = React.forwardRef<HTMLDivElement, MasonryGridProps>(
  ({ className, columns = 3, gap = "md", ...props }, ref) => {
    const masonryClasses = cn(
      "columns-1",
      {
        "sm:columns-2": columns >= 2,
        "md:columns-3": columns >= 3,
        "lg:columns-4": columns >= 4,
      },
      {
        "gap-2": gap === "sm",
        "gap-4": gap === "md",
        "gap-6": gap === "lg",
      },
      className
    );

    return <div ref={ref} className={masonryClasses} {...props} />;
  }
);
MasonryGrid.displayName = "MasonryGrid";

// Section wrapper with consistent spacing
interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  compact?: boolean;
  fullWidth?: boolean;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, compact = false, fullWidth = false, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          compact ? "compact-section" : "py-12 px-4 sm:px-6 lg:px-8",
          !fullWidth && "max-w-7xl mx-auto",
          className
        )}
        {...props}
      />
    );
  }
);
Section.displayName = "Section";

// Container with max width and centering
interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "lg", ...props }, ref) => {
    const sizeClasses = {
      sm: "max-w-2xl",
      md: "max-w-4xl", 
      lg: "max-w-6xl",
      xl: "max-w-7xl",
      full: "max-w-full",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto px-4 sm:px-6 lg:px-8",
          sizeClasses[size],
          className
        )}
        {...props}
      />
    );
  }
);
Container.displayName = "Container";

export { 
  Grid, 
  CompactGrid, 
  FlexGrid, 
  MasonryGrid, 
  Section, 
  Container 
};

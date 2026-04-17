import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export interface AvatarGroupAvatar {
  src?: string;
  fallback: string;
  alt?: string;
}

interface AvatarGroupProps {
  avatars: AvatarGroupAvatar[];
  max?: number;
  size?: "sm" | "default" | "lg";
  className?: string;
}

export function AvatarGroup({
  avatars,
  max = 4,
  size = "default",
  className,
}: AvatarGroupProps) {
  const visible = avatars.slice(0, max);
  const overflow = avatars.length - visible.length;

  return (
    <div
      className={cn(
        "flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background",
        className
      )}
    >
      {visible.map((avatar, index) => (
        <Avatar key={index} size={size}>
          {avatar.src && <AvatarImage src={avatar.src} alt={avatar.alt} />}
          <AvatarFallback>{avatar.fallback}</AvatarFallback>
        </Avatar>
      ))}
      {overflow > 0 && (
        <Avatar size={size}>
          <AvatarFallback className="bg-muted text-muted-foreground">
            +{overflow}
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}

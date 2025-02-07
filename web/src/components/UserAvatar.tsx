import { cn } from "@/utils";

interface Props {
  avatarUrl?: string;
  className?: string;
}

const UserAvatar = (props: Props) => {
  const { avatarUrl, className } = props;
  const forwardAvatarUrl = avatarUrl && !avatarUrl.startsWith("http") ? `${import.meta.env.VITE_API_HOST}${avatarUrl}` : avatarUrl;
  return (
    <div className={cn(`w-8 h-8 overflow-clip rounded-xl`, className)}>
      <img
        className="w-full h-auto shadow min-w-full min-h-full object-cover dark:opacity-80"
        src={forwardAvatarUrl || "/full-logo.webp"}
        decoding="async"
        loading="lazy"
        alt=""
      />
    </div>
  );
};

export default UserAvatar;

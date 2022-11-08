import showPreviewImageDialog from "./PreviewImageDialog";
import "../less/image.less";

interface Props {
  imgUrls: string[];
  index: number;
  className?: string;
}
import { BASE_URL } from "../helpers/api";

const Image: React.FC<Props> = (props: Props) => {
  const { className, imgUrls, index } = props;

  const url = BASE_URL + imgUrls[index];
  const handleImageClick = () => {
    showPreviewImageDialog(imgUrls, index);
  };

  return (
    <div className={"image-container " + className} onClick={handleImageClick}>
      <img src={url} decoding="async" loading="lazy" />
    </div>
  );
};

export default Image;

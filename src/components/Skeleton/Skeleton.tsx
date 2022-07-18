import RLSkeleton, { SkeletonProps } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Skeleton = (props: SkeletonProps) => {
  return <RLSkeleton baseColor="#5B7DA8" highlightColor="#3D5673" {...props} />;
};

export default Skeleton;

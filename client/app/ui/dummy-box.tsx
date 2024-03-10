// グレーの斜線・角丸のボックスを表示するダミーコンポーネント
import { grayDark } from "@radix-ui/colors";
import { Box } from "@radix-ui/themes";
export const DummyBox = (box_props: React.ComponentProps<typeof Box>) => {
  return (
    <Box
      {...box_props}
      style={{
        borderRadius: "10px",
        border: `1px solid ${grayDark.gray6}`,
        backgroundColor: grayDark.gray3,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
    />
  );
};

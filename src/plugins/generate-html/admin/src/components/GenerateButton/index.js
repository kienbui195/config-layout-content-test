import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalLayout,
  Typography,
} from "@strapi/design-system";
import { useCMEditViewDataManager } from "@strapi/helper-plugin";

const GenerateButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const {
    formErrors,
    slug,
    isCreatingEntry,
    modifiedData = {},
  } = useCMEditViewDataManager();

  const handlePreviewProduct = async () => {
    if (
      !modifiedData.name ||
      !modifiedData.slug ||
      !modifiedData.headline ||
      !modifiedData.sub_headline ||
      !modifiedData.prod_dtl?.product_headline ||
      !modifiedData.prod_dtl?.product_page_headline ||
      !modifiedData.prod_dtl?.product_page_desc ||
      !modifiedData.prod_dtl?.product_page_link ||
      !modifiedData.our_story?.founder_name ||
      !modifiedData.our_story?.founder_image ||
      !modifiedData.our_story?.story_headline ||
      !modifiedData.our_story?.story_desc ||
      (modifiedData.more_info && !modifiedData.more_info.features) ||
      !modifiedData.product_type
    ) {
      setIsVisible((prev) => !prev);
    } else {
      window.open(
        `${process.env.FE_URL}/preview/${
          modifiedData.product_type === "Single"
            ? "products"
            : "brands-products"
        }/${modifiedData.slug}`
      );
    }
  };

  if (slug !== "api::get-layout.get-layout") return;

  return (
    <Box marginTop={8}>
      <Box marginBottom={2}>
        <Typography variant={"sigma"}>Generate Code</Typography>
      </Box>
      <Divider />
      <Flex justifyContent="stretch">
        <Button
          fullWidth
          display={"flex"}
          alignItems="center"
          marginTop={4}
          variant="default"
          isExternal
          onClick={handlePreviewProduct}
        >
          Preview
        </Button>
      </Flex>
      {isVisible && (
        <ModalLayout
          onClose={() => setIsVisible((prev) => !prev)}
          labelledBy="title"
          width={"500px"}
        >
          <ModalHeader>
            <Typography
              fontWeight="bold"
              textColor="neutral800"
              as="h2"
              id="title"
            >
              Confirmation
            </Typography>
          </ModalHeader>
          <ModalBody>
            <Box>
              <Typography id="result">
                Render cây dom sau khi đọc dữ liệu và setting
              </Typography>
            </Box>
          </ModalBody>
          <ModalFooter
            startActions={
              <Button
                onClick={() => {
                  const str = document.querySelector('#result');
                  navigator.clipboard.writeText(str.innerHTML)
                  alert('Copy thành công!')
                }}
                variant="tertiary"
              >
                Copy
              </Button>
            }
            endActions={
              <Button onClick={() => setIsVisible((prev) => !prev)}>
                Finish
              </Button>
            }
          />
        </ModalLayout>
      )}
    </Box>
  );
};

export default GenerateButton;
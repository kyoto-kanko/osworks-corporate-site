import React from "react";
import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";

import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="justify-around bottom-0 w-full bg-white p-4">
      <div className="flex justify-around h-5 items-center space-x-4 text-sm">
        <div>
          <Drawer>
            <DrawerTrigger>Access</DrawerTrigger>
            <DrawerContent className="flex flex-col items-center justify-center h-3/4">
              <DrawerDescription className="flex-1 w-full">
                <div className="p-8 h-full w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3265.18272387588!2d135.96361017784068!3d35.077166972788255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60017409793d5a8f%3A0x443ed96a83ffac3e!2z44CSNTI0LTAwNjEg5ruL6LOA55yM5a6I5bGx5biC6LWk6YeO5LqV55S677yS77yW77yU!5e0!3m2!1sja!2sjp!4v1718207336041!5m2!1sja!2sjp"
                    className="w-full h-full"
                    loading="lazy"
                  ></iframe>
                </div>
              </DrawerDescription>
              <DrawerFooter>
                <DrawerClose>
                  <Button variant="outline">閉じる</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
        <Separator orientation="vertical" />
        <Drawer>
          <DrawerTrigger>Instagram</DrawerTrigger>
          <DrawerContent>
            <DrawerDescription className="flex justify-center">
              <a href="https://www.instagram.com/_os_works_">
                <Image
                  src="/instagram/os-works-qr.jpg"
                  alt="Instagram QR Code"
                  width={500}
                  height={500}
                />
              </a>
            </DrawerDescription>
            <DrawerFooter>
              <DrawerClose>
                <Button variant="outline">閉じる</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <Separator orientation="vertical" />
        <Drawer>
          <DrawerTrigger>Contact</DrawerTrigger>
          <DrawerContent>
            <DrawerDescription>
              <div className="p-8 flex justify-center">
                <div className="flex flex-col items-start space-y-2">
                  <div className="text-gray-300 hover:text-white">
                    <a href="tel:090-7823-1955">TELL: 090-7823-1955</a>
                  </div>
                  <div className="text-gray-300 hover:text-white">
                    <a href="mailto:os.works1996@gmail.com">
                      EMAIL: os.works1996@gmail.com
                    </a>
                  </div>
                  <div className="text-gray-300 hover:text-white">
                    <a href="https://lin.ee/1ev9Xy5">
                      公式LINE: https://lin.ee/1ev9Xy5
                    </a>
                  </div>
                </div>
              </div>
            </DrawerDescription>
            <DrawerFooter>
              <DrawerClose>
                <Button variant="outline">閉じる</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Card, CardContent } from "@/components/ui/card";

import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-black dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Image
              src="/logo/logo_black.jpg"
              alt="OSWORKS Logo"
              className="w-32 h-8"
              width={500}
              height={500}
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Access
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Drawer>
                    <DrawerTrigger>Workshop</DrawerTrigger>
                    <DrawerContent className="flex flex-col items-center justify-center h-3/4">
                      <DrawerDescription className="flex-1 w-full">
                        <div className="p-8 h-full w-full">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3265.18272387588!2d135.96361017784068!3d35.077166972788255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60017409793d5a8f%3A0x443ed96a83ffac3e!2z44CSNTI0LTAwNjEg5ruL6LOA55yM5a6I5bGx5biC6LWk6YeO5LqV55S677yS77yW77yU!5e0!3m2!1sja!2sjp!4v1718207336041!5m2!1sja!2sjp"
                            title="Google Maps"
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
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                SNS
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
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
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                contact
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline"></a>
                </li>
                <li>
                  <Drawer>
                    <DrawerTrigger>Tell & Email & Line</DrawerTrigger>
                    <DrawerContent>
                      <DrawerDescription>
                        <Card>
                          <CardContent className="flex items-center justify-center p-8">
                            <ul className="space-y-4 text-gray-500">
                              <li>
                                <a href="tel:090-7823-1955">
                                  TELL: 090-7823-1955
                                </a>
                              </li>
                              <li>
                                <a href="mailto:os.works1996@gmail.com">
                                  EMAIL: os.works1996@gmail.com
                                </a>
                              </li>
                              <li>
                                <a href="https://lin.ee/1ev9Xy5">
                                  公式LINE: https://lin.ee/1ev9Xy5
                                </a>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>
                      </DrawerDescription>
                      <DrawerFooter>
                        <DrawerClose>
                          <Button variant="outline">閉じる</Button>
                        </DrawerClose>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="text-sm text-gray-500 text-center dark:text-gray-400">
          <p>© 2024 Osworks. All rights reserved.</p>
          <div>Additional content</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

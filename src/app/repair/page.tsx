import React from "react";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ComponentName = () => {
  return (
    <div className="p-8">
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="repairPack"
      >
        <AccordionItem value="repairPack">
          <AccordionTrigger>REPAIR PACK</AccordionTrigger>
          <AccordionContent>
            <Table>
              <TableBody>
                {repairPacks.map((repairPack) => (
                  <TableRow key={repairPack.title}>
                    <TableCell>
                      <p>{repairPack.title}</p>
                      <p>{repairPack.about}</p>
                    </TableCell>
                    <TableCell>{repairPack.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="groveMitt">
          <AccordionTrigger>GROVE / MITT</AccordionTrigger>
          <AccordionContent>
            <Table>
              <TableBody>
                {groveAntMitts.map((groveAntMitt) => (
                  <TableRow key={groveAntMitt.title}>
                    <TableCell>
                      <p>{groveAntMitt.title}</p>
                      <p>{groveAntMitt.about}</p>
                    </TableCell>
                    <TableCell>{groveAntMitt.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <ScrollArea className="w-auto whitespace-nowrap rounded-md border">
              <div className="flex w-max space-x-4 p-4">
                {works.map((artwork) => (
                  <figure key={artwork.artist} className="shrink-0">
                    <div className="overflow-hidden rounded-md">
                      <Image
                        src={artwork.art}
                        alt={`Photo by ${artwork.artist}`}
                        className="aspect-[3/4] h-fit w-fit object-cover"
                        width={300}
                        height={400}
                      />
                    </div>
                    <figcaption className="pt-2 text-xs text-muted-foreground">
                      Photo by{" "}
                      <span className="font-semibold text-foreground">
                        {artwork.artist}
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>SHOES</AccordionTrigger>
          <AccordionContent>
            <Table>
              <TableBody>
                {shoes.map((shoes) => (
                  <TableRow key={shoes.title}>
                    <TableCell>
                      {shoes.title}
                      <br></br>
                      {shoes.about}
                    </TableCell>
                    <TableCell>{shoes.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <ScrollArea className="w-auto whitespace-nowrap rounded-md border">
              <div className="flex w-max space-x-4 p-4">
                {works.map((artwork) => (
                  <figure key={artwork.artist} className="shrink-0">
                    <div className="overflow-hidden rounded-md">
                      <Image
                        src={artwork.art}
                        alt={`Photo by ${artwork.artist}`}
                        className="aspect-[3/4] h-fit w-fit object-cover"
                        width={300}
                        height={400}
                      />
                    </div>
                    <figcaption className="pt-2 text-xs text-muted-foreground">
                      Photo by{" "}
                      <span className="font-semibold text-foreground">
                        {artwork.artist}
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export interface Repair {
  title: string;
  about: string;
  price: string;
}

const repairPacks: Repair[] = [
  {
    title: "チューニング",
    about: "(グラブ磨き + グリス交換)",
    price: "¥4,000",
  },
  {
    title: "オールアップ",
    about: "(グラブ磨き + グリス交換 + 全紐交換)",
    price: "¥1,800",
  },
  {
    title: "オーバーホール",
    about: "(グラブ磨き + グリス交換 + 全紐交換 + ヘリ革全交換)",
    price: "¥14,000",
  },
];

const groveAntMitts: Repair[] = [
  {
    title: "クラブ磨き",
    about: "",
    price: "¥2,000",
  },
  {
    title: "紐交換1ヶ所",
    about: "",
    price: "¥1,800",
  },
  {
    title: "紐交換3ヶ所",
    about: "",
    price: "¥5,000",
  },
  {
    title: "全紐交換【グラブ】",
    about: "",
    price: "¥6,000",
  },
  {
    title: "全紐交換【ミット】",
    about: "",
    price: "¥7,000",
  },
  {
    title: "型付け【スチーム】",
    about: "",
    price: "¥3,000",
  },
  {
    title: "型付け【湯揉み】",
    about: "",
    price: "¥4,500",
  },
  {
    title: "グリス交換",
    about: "",
    price: "¥2,500",
  },
  {
    title: "当て革加工",
    about: "",
    price: "¥3,500",
  },
  {
    title: "ウェブ補修",
    about: "",
    price: "¥3,000",
  },
  {
    title: "ウェブほつれ補修",
    about: "",
    price: "¥500 ~",
  },
  {
    title: "破れ補修",
    about: "(2ヶ所目以降 + ¥1,500)",
    price: "¥4,500",
  },
  {
    title: "ヘリ革交換",
    about: "(15cm未満)",
    price: "¥3,500",
  },
  {
    title: "ヘリ革全交換",
    about: "(ミット類は + ¥1,000)",
    price: "¥7,000",
  },
  {
    title: "平裏上貼り補修",
    about: "",
    price: "¥3,500 ~",
  },
  {
    title: "指掛け紐交換",
    about: "",
    price: "¥3,500",
  },
  {
    title: "指掛け紐補修",
    about: "",
    price: "¥2,000",
  },
];

const shoes: Repair[] = [
  {
    title: "縫いP",
    about: "(投手 / 野手)",
    price: "¥3,000",
  },
  {
    title: "打ちP【革製】",
    about: "",
    price: "¥2,000",
  },
  {
    title: "破れ補修",
    about: "",
    price: "¥2,000 ~",
  },
];

export interface Artwork {
  artist: string;
  art: string;
}

export const works: Artwork[] = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
];

export default ComponentName;

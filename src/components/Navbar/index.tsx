"use client";
import HeaderNav from "./HeaderNav";

type Props = {
  isScroll: boolean;
};

export default function index({isScroll}: Props) {
  return (
    <>
      <HeaderNav isScroll={isScroll} />
    </>
  );
}

import Carousel from "@/app/_components/carousel";

const slides = [
  '/5.jpg',
  '/7.jpg',
  '/9.jpg',
  '/10.jpg'
]

export default function Home() {
  return (
    <div className="max-w-2xl gap-4 m-auto">
      <Carousel autoSlide={true} autoSlideInterval={3000} slides={slides}/>
    </div>
  );
}

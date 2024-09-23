import { Button } from "./ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"

function CategoryCarousel() {
    const category = [
        "Frontend Develoer",
        "Backend Developer",
        "Fullstack Developer",
        "Data Scientist",
        "Mobile Developer",
        "UI/UX Designer",
        "DevOps Engineer",
        "Game Developer",
        "Cloud Engineer",
        "Security Engineer",
    ]
    return (
        <div>
            <Carousel className="w-full max-w-xl mx-auto my-20">
                <CarouselContent>
                    {
                        category.map((cat) => (
                            <CarouselItem key={cat} className="md:basis-1/2 lg-basis-1/3">
                                <Button onClick={()=>{}} variant="outline" className="rounded-full">{cat}</Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default CategoryCarousel

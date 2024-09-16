"use client"
import { useEffect } from 'react';


export default function JapanFunFacts() {
    useEffect(() => {
        setTimeout(() => {
            window.location.href = "https://docs.google.com/presentation/d/1T8s9qlukPmlbqtEcXaL0S39SvZZ518uCBsIvzfyIP1g/edit?usp=sharing"
        }, 500);
    }, [])
    return (
        <main className="flex flex-col gap-8 sm:gap-16">
            <section className="flex flex-col items-start gap-3 sm:gap-4">
                <h1 className="mb-0">Fun Facts About Japan</h1>
                <p className="text-lg">Discover interesting and quirky facts about Japan!</p>
            </section>

            <section className="flex flex-col items-start gap-3 sm:gap-4">
                <h2>Fact 1: Japan Has More Vending Machines Than People!</h2>
                <p>
                    With over 5 million vending machines, Japan has one of the highest densities of vending machines in
                    the world, offering everything from drinks to hot meals.
                </p>
                <img
                    src="https://www.planmyjapan.com/wp-content/uploads/2024/03/photo-26-09-2023-17-57-47.jpg"
                    alt="Vending machine in Japan"
                    className="w-full h-auto"
                />
            </section>

            <section className="flex flex-col items-start gap-3 sm:gap-4">
                <h2>Fact 2: Japan Is Home to 47 Prefectures</h2>
                <p>
                    Each prefecture has its own unique culture, food, and attractions. Tokyo is a bustling metropolis,
                    while places like Hokkaido are famous for their natural beauty.
                </p>
                <img
                    src="https://images.pexels.com/photos/315191/pexels-photo-315191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Japanese city view"
                    className="w-full h-auto"
                />
            </section>

            <section className="flex flex-col items-start gap-3 sm:gap-4">
                <h2>Fact 3: Bowing Is an Important Cultural Gesture</h2>
                <p>
                    In Japan, bowing is a common form of greeting, apology, and showing respect. The depth of the bow
                    can indicate the level of respect or formality.
                </p>
                <img
                    src="https://source.unsplash.com/featured/?japan,bowing"
                    alt="People bowing in Japan"
                    className="w-full h-auto"
                />
            </section>

            <section className="flex flex-col items-start gap-3 sm:gap-4">
                <h2>Fact 4: Capsule Hotels are Popular in Urban Areas</h2>
                <p>
                    Capsule hotels offer tiny, affordable sleeping pods and are especially popular among travelers
                    looking for a budget-friendly stay.
                </p>
                <img
                    src="https://source.unsplash.com/featured/?japan,capsulehotel"
                    alt="Capsule hotel in Japan"
                    className="w-full h-auto"
                />
            </section>
        </main>
    );
}

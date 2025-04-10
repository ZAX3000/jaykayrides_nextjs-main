"use client"

import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const stats = [
  {
    title: "Trips Completed",
    value: "100K+",
    description: "Daily rides across the city",
    icon: "🚗"
  },
  {
    title: "Active Drivers",
    value: "5K+",
    description: "Professional drivers ready to serve",
    icon: "👨‍✈️"
  },
  {
    title: "Cities Covered",
    value: "10+",
    description: "Nationwide coverage",
    icon: "🌆"
  },
  {
    title: "Customer Rating",
    value: "4.9",
    description: "Average rating from 100K+ users",
    icon: "⭐"
  }
]

const pricing = [
  {
    title: "Basic",
    price: "$2.99",
    description: "Perfect for occasional riders",
    features: [
      "Unlimited rides",
      "24/7 support",
      "Basic tracking",
      "Standard priority"
    ],
    popular: false
  },
  {
    title: "Premium",
    price: "$4.99",
    description: "Best value for frequent riders",
    features: [
      "Priority access",
      "Real-time tracking",
      "VIP support",
      "Exclusive offers",
      "Faster pickups"
    ],
    popular: true
  },
  {
    title: "Business",
    price: "$9.99",
    description: "For corporate needs",
    features: [
      "Team accounts",
      "Expense tracking",
      "Dedicated manager",
      "Custom reporting",
      "Bulk discounts"
    ],
    popular: false
  }
]

const testimonials = [
  {
    name: "John Smith",
    role: "Regular User",
    content: "Jaykay Rides has made my daily commute so much easier. The app is smooth and the drivers are always on time!",
    avatar: "👨"
  },
  {
    name: "Sarah Johnson",
    role: "Business Owner",
    content: "As a business owner, I rely on Jaykay Rides for my team's transportation needs. It's reliable and professional.",
    avatar: "👩"
  },
  {
    name: "Mike Chen",
    role: "Night Shift Worker",
    content: "The 24/7 availability is a lifesaver for my night shift schedule. Always find a ride whenever I need it.",
    avatar: "🧑"
  }
]

const features = [
  {
    title: "24/7 Availability",
    description: "Always ready to serve you, anytime, anywhere.",
    icon: "⏰"
  },
  {
    title: "Smart Routing",
    description: "Optimized routes for faster, more efficient travel.",
    icon: "🗺️"
  },
  {
    title: "Real-time Tracking",
    description: "Track your ride in real-time with our advanced system.",
    icon: "📍"
  },
  {
    title: "Cashless Payments",
    description: "Pay easily with your preferred payment method.",
    icon: "💳"
  },
  {
    title: "Safety First",
    description: "Background-checked drivers and secure rides.",
    icon: "🛡️"
  },
  {
    title: "Instant Booking",
    description: "Get your ride in minutes with our quick booking system.",
    icon: "⚡"
  }
]

const cities = [
  {
    name: "Metro City",
    image: "/city1.jpg"
  },
  {
    name: "Capital Town",
    image: "/city2.jpg"
  },
  {
    name: "Harbor Bay",
    image: "/city3.jpg"
  },
  {
    name: "Mountain View",
    image: "/city4.jpg"
  },
  {
    name: "Sunset Valley",
    image: "/city5.jpg"
  },
  {
    name: "Riverfront",
    image: "/city6.jpg"
  }
]

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b">
        <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Jaykay Rides</span>
          </Link>
          <div className="flex items-center gap-2">
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
                Features
              </Link>
              <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-2">
              <ModeToggle />
              <Link href="/login">
                <Button variant="outline" className="hidden sm:inline-flex">
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="hidden sm:inline-flex">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"></div>
          <div className="container py-24 px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
                  Ride smarter, not harder
                </span>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  Seamless Rides, <br />Smarter Journeys
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Experience the future of urban mobility with Jaykay Rides. 
                  Fast, reliable, and always there when you need us.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/signup">
                  <Button size="lg" className="text-white bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90">
                    Get Started
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    Live Demo
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex items-center gap-4 pt-4"
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="w-8 h-8 rounded-full bg-muted border-2 border-background" />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">10,000+</span> happy riders this month
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex-1 relative"
            >
              <div className="relative w-full aspect-square max-w-xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-3xl -rotate-6 blur-xl opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-600/10 rounded-3xl rotate-6" />
                <div className="relative rounded-3xl overflow-hidden border border-border/50 bg-background shadow-2xl">
                  <div className="absolute inset-0 bg-[url('/grid.svg')] [mask-image:linear-gradient(to_bottom,white_30%,transparent_70%)]" />
                  <div className="relative h-full p-6 flex flex-col">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                      <div className="text-sm font-medium">Jaykay Rides</div>
                      <div className="w-6" />
                    </div>
                    
                    <div className="flex-1 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="text-5xl">🚖</div>
                        <h3 className="text-xl font-bold">Your ride is arriving</h3>
                        <p className="text-muted-foreground">Estimated time: 2 min</p>
                        <Button className="mt-4">Track Driver</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 sm:py-24">
          <div className="container px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <Card key={stat.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <CardDescription>{stat.title}</CardDescription>
                    <CardTitle className="text-4xl">{stat.value}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4">
                      <div className="text-2xl">{stat.icon}</div>
                      <p className="text-sm text-muted-foreground">{stat.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 sm:py-24 bg-muted/50">
          <div className="container px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Jaykay Rides</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We're redefining urban mobility with cutting-edge technology and exceptional service.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-shadow h-full">
                    <CardHeader className="pb-0">
                      <div className="flex items-center gap-4">
                        <div className="text-3xl">{feature.icon}</div>
                        <CardTitle>{feature.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="about" className="py-16 sm:py-24">
          <div className="container px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How It Works</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Get your ride in just a few simple steps.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Book Your Ride",
                  description: "Enter your destination and choose your ride type in our app or website.",
                  icon: "📱"
                },
                {
                  step: "2",
                  title: "Meet Your Driver",
                  description: "Your nearest driver will arrive at your location in minutes.",
                  icon: "🧑‍✈️"
                },
                {
                  step: "3",
                  title: "Enjoy Your Ride",
                  description: "Sit back and relax while we take you to your destination safely.",
                  icon: "😊"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -top-8 -left-8 w-16 h-16 rounded-full bg-primary/10 z-0" />
                  <Card className="relative z-10 hover:shadow-lg transition-shadow h-full">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="text-3xl">{item.icon}</div>
                        <div>
                          <span className="text-sm font-medium text-primary">Step {item.step}</span>
                          <CardTitle>{item.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 sm:py-24 bg-muted/50">
          <div className="container px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Simple, Transparent Pricing</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Choose the plan that fits your needs. No hidden fees.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricing.map((plan, index) => (
                <motion.div
                  key={plan.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className={`hover:shadow-lg transition-shadow h-full relative ${plan.popular ? "border-primary" : ""}`}>
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                        Most Popular
                      </div>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle className={plan.popular ? "text-primary" : ""}>{plan.title}</CardTitle>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                      <p className="text-muted-foreground">{plan.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                        Get Started
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 sm:py-24">
          <div className="container px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Customers Say</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Don't just take our word for it. Hear from our satisfied customers.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-shadow h-full">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="text-3xl">{testimonial.avatar}</div>
                        <div>
                          <div className="font-medium">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        </div>
                      </div>
                      <blockquote className="mt-6 border-l-2 pl-4 italic text-muted-foreground">
                        "{testimonial.content}"
                      </blockquote>
                      <div className="mt-4 flex gap-1 text-yellow-500">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cities Section */}
        <section className="py-16 sm:py-24 bg-muted/50">
          <div className="container px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Available In These Cities</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We're expanding rapidly to serve you better.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {cities.map((city, index) => (
                <motion.div
                  key={city.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative group overflow-hidden rounded-lg aspect-square"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors z-10" />
                  <div className="absolute bottom-4 left-4 z-20">
                    <h3 className="text-white font-medium">{city.name}</h3>
                  </div>
                  <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800">
                    <div className="w-full h-full flex items-center justify-center text-4xl">
                      {city.name.charAt(0)}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-primary to-blue-600 text-white">
          <div className="container px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl font-bold tracking-tight sm:text-4xl mb-6"
              >
                Ready to experience better rides?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-xl mb-8 text-white/90"
              >
                Join thousands of happy riders today.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/signup">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 dark:text-black">
                    Get Started
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="text-black border-white hover:bg-white/10 hover:text-black">
                    Contact Sales
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 sm:py-24">
          <div className="container px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Get In Touch</h2>
                  <p className="text-lg text-muted-foreground">
                    Have questions or need assistance? We're here to help.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Call Us</h3>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Email Us</h3>
                      <p className="text-muted-foreground">support@jaykayrides.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Visit Us</h3>
                      <p className="text-muted-foreground">123 City Center, Business District, Metro City</p>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <h3 className="font-medium mb-4">Follow Us</h3>
                    <div className="flex gap-4">
                      {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                        <Link key={social} href="#" className="bg-muted p-3 rounded-lg hover:bg-muted/80 transition-colors">
                          <span className="sr-only">{social}</span>
                          <div className="w-5 h-5" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Send Us a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="first-name" className="block text-sm font-medium mb-1">First Name</label>
                          <Input id="first-name" placeholder="John" />
                        </div>
                        <div>
                          <label htmlFor="last-name" className="block text-sm font-medium mb-1">Last Name</label>
                          <Input id="last-name" placeholder="Doe" />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                        <Input id="email" type="email" placeholder="you@example.com" />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="support">Support Request</SelectItem>
                            <SelectItem value="partnership">Business Partnership</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                        <Textarea id="message" rows={4} placeholder="Your message..." />
                      </div>
                      
                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t">
        <div className="container py-12 px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Jaykay Rides</span>
              </div>
              <p className="text-muted-foreground mb-6">
                Experience the future of urban mobility with Jaykay Rides. 
                Fast, reliable, and always there when you need us.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="bg-muted p-3 rounded-lg hover:bg-muted/80 transition-colors">
                  <span className="sr-only">App Store</span>
                  <div className="w-5 h-5" />
                </Link>
                <Link href="#" className="bg-muted p-3 rounded-lg hover:bg-muted/80 transition-colors">
                  <span className="sr-only">Google Play</span>
                  <div className="w-5 h-5" />
                </Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
                <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
                <li><Link href="/press" className="text-muted-foreground hover:text-primary transition-colors">Press</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Support</h3>
              <ul className="space-y-3">
                <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
                <li><Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
                <li><Link href="/help" className="text-muted-foreground hover:text-primary transition-colors">Help Center</Link></li>
                <li><Link href="/community" className="text-muted-foreground hover:text-primary transition-colors">Community</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
                <li><Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</Link></li>
                <li><Link href="/licenses" className="text-muted-foreground hover:text-primary transition-colors">Licenses</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Jaykay Rides. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Facebook</span>
                <div className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Twitter</span>
                <div className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Instagram</span>
                <div className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">LinkedIn</span>
                <div className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
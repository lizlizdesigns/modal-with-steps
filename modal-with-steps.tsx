"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function ModalWithSteps() {
  const [open, setOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 3

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    } else {
      setOpen(false)
      setCurrentStep(1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Open Modal</Button>
        </DialogTrigger>
        <DialogContent className="fixed left-[50%] top-[50%] z-50 max-w-[1200px] w-[calc(100%-64px)] h-[calc(100%-96px)] translate-x-[-50%] translate-y-[-50%] flex flex-col p-0 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] border-none">
          {/* Progress bar */}
          <div className="w-full h-2 bg-gray-200">
            <div
              className="h-full transition-all duration-300 ease-in-out"
              style={{
                width: `${(currentStep / totalSteps) * 100}%`,
                backgroundColor: "#675dff",
              }}
            />
          </div>
          
          <div className="relative flex flex-col bg-white h-full overflow-hidden w-full rounded-[16px]">
            {/* Modal content */}
            <div className="p-8 pt-8 flex-1 overflow-y-auto">
              <h2 className="text-xl font-semibold mb-4">
                {currentStep === 1 && "What's your business name?"}
                {currentStep === 2 && "How do you want to start?"}
                {currentStep === 3 && "How can Stripe help you?"}
              </h2>

              <div className="space-y-4 min-h-[300px]">
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="businessName" className="text-sm font-medium text-gray-700">
                        Business Name
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#675dff] focus:border-transparent"
                        placeholder="Enter your business name"
                      />
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <>
                    <div className="h-6 bg-gray-200 rounded w-2/3 animate-pulse"></div>
                    <div className="h-12 bg-gray-200 rounded w-full animate-pulse"></div>
                    <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                    <div className="h-12 bg-gray-200 rounded w-full animate-pulse"></div>
                    <div className="h-24 bg-gray-200 rounded w-full animate-pulse"></div>
                  </>
                )}

                {currentStep === 3 && (
                  <>
                    <div className="h-6 bg-gray-200 rounded w-full animate-pulse"></div>
                    <div className="h-12 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                    <div className="h-6 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                    <div className="h-36 bg-gray-200 rounded w-full animate-pulse"></div>
                    <div className="h-6 bg-gray-200 rounded w-2/3 animate-pulse"></div>
                  </>
                )}
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between p-8 border-t mt-auto">
              <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 1}>
                Previous
              </Button>
              <Button onClick={handleNext} style={{ backgroundColor: "#675dff" }} className="hover:bg-[#5649ff]">
                {currentStep === totalSteps ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

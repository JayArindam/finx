// Model for contact form data
export interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

// Controller function to handle form submission
export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean }> {
  // In a real application, this would send data to a backend API
  // For now, we'll simulate a successful submission with a delay

  return new Promise((resolve, reject) => {
    // Validate the data
    if (!data.name || !data.email || !data.message) {
      reject(new Error("Missing required fields"))
      return
    }

    // Simulate API call delay
    setTimeout(() => {
      // Simulate successful submission (95% of the time)
      if (Math.random() > 0.05) {
        resolve({ success: true })
      } else {
        reject(new Error("Server error"))
      }
    }, 1000)
  })
}

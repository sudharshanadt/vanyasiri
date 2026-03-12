import Medusa from "@medusajs/js-sdk"

const medusa = new Medusa({
    baseUrl: process.env.NEXT_PUBLIC_MEDUSA_URL || "http://localhost:9000",
    debug: process.env.NODE_ENV === "development",
    publishableKey: process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || "pk_19c9867c6163b41d4b003cb12d1b028fd67ccb9fa9c2b19993b4bd8cf1609c0d",
})

export default medusa

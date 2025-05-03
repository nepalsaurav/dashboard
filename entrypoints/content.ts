export default defineContentScript({
    matches: ["https://example.com/"],
    main(ctx) {
        console.log("hello world")
    }
})

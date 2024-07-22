import { connect } from "../index.js";

export const ConnexionService = {
    getConnexion: async (params) => {
        const url = params.request.url;
        const selector = params.request.waitFor.value;
        const proxy = params.proxy;
        const timeout = params.request.timeout;

        const protection = params.protection;
        let turnstile = false;
        if (protection == "tr_captcha")
            turnstile = true;
        console.log(turnstile);

        const { page, browser } = await connect({
            headless: 'auto',
            args: [],
            customConfig: {},
            proxy: proxy,
            skipTarget: [],
            fingerprint: false,
            turnstile: turnstile,
            connectOption: {}
        });

        await page.goto(url, {
            waitUntil: 'domcontentloaded'
        });
        try {
            await page.waitForSelector(selector, {
                timeout: timeout
            });
            const content = await page.content();
            const cookies = await page.cookies();
            await browser.close();
            return { content, cookies };
        } catch (error) {
            console.log('Error:', error.message);
            clearInterval(cl);
            await browser.close();
            throw error;
        }
    }
};

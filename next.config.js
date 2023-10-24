// relevant part of 'next.config.js'
const path = require('path');

module.export = {
    experimental: {
        async headers(){
            return [
                {
                    source: "/(.*)",
                    headers: [
                        {
                            key: "cross-origin-resource-policy",
                            value: "cross-origin"
                        }
                    ]
                }
            ]
        }
    }
}
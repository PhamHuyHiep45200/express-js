const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const port = 5000;

const shopping = [
  {
    title: "Apple iPad 10th Gen. 64gb, Wi-Fi, 10.9in - Silver",
    source: "Apple",
    link: "https://www.apple.com/us/shop/go/product/MPQ03?cid=aos-us-seo-pla-ipad",
    price: "$349.00",
    delivery: "Free shipping",
    imageUrl:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTc7N1awvVxue5ySjedAq2xHdEh4-AW94wW6uBU_w64Bb5XAn05-a2SrTNHt5nQPW26aMwj7Z3WqDT8LtCb8K67PmcuchvWYpOsc67WBlKdKC7c0WiXOvQ&usqp=CAE",
    rating: 5,
    ratingCount: 32,
    offers: "20+",
    productId: "12438837292986004794",
    position: 1,
  },
  {
    title: '10.9" Apple iPad 64 GB 10th Gen',
    source: "Amazon.com",
    link: "https://www.amazon.com/Apple-2022-10-9-inch-iPad-Wi-Fi/dp/B0BJLT98Q7?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=ATVPDKIKX0DER",
    price: "$299.99",
    delivery: "Free shipping",
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQfJEU_cOqBJkmN03hE0ZWR4dQbhC6aYnxeng9BbX3-LsXSom5bjKJ6Oy1ZVtvMCAfjBMUnkAJcRyGQV9kaNL3R6IlY4cihPjxohvj2tVdwc1SqmRgdTZM&usqp=CAE",
    rating: 5,
    ratingCount: 32,
    offers: "20+",
    productId: "18408287633064836349",
    position: 2,
  },
  {
    title: 'Apple MacBook Air 13.3" M1 8GB 256GB SSD',
    source: "eBay - arisdealsllc",
    link: "https://www.ebay.com/itm/334423432735?chn=ps&mkevt=1&mkcid=28&srsltid=AfmBOopSd1xvJJ_5zL2d_URqMqtGyYea27bYbiwEgP64NNiE6RV1I3BwhEA",
    price: "$850.00",
    delivery: "Free shipping",
    imageUrl:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRCokB0K039yDQX3jOmgWZQT3YHTSTmOUzm_iZJ1AzWITqJ2fxSuhbgXPrWZ--Z1QqGOwZS8CgO0i-4JyjWWQhvjivyhtADyEkZ4sF8TUhwH4eN8YBaQA&usqp=CAE",
    rating: 5,
    ratingCount: 13,
    offers: "10+",
    productId: "1434325277585982111",
    position: 3,
  },
  {
    title: "Apple iPhone 15  - 256 GB - Black - Unlocked",
    source: "Consumer Cellular",
    link: "https://www.consumercellular.com/shopping/details/iphone_15/overview?deviceColor=black&deviceMemorySize=256GB&isDeviceNewOrReturn=new&paymentMethod=none&srsltid=AfmBOoqyOYgoGqP3ul6eSnTrpMYw9TMMqsuhBlZUlUZqD5jF6EvBArfHIDQ",
    price: "$929.00",
    delivery: "$12.00 shipping",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRqI1O0UEsNrTXtQtXxugk4IuItVzM9XYa5Wf1-95bHgQIRqsF3rQbie7TUr4KY4jGgSF9vLs8Q5za1PIpmtg2LU1DUk7av8ZkDZ2L5SJ0d0Pfmlgl2hm0&usqp=CAE",
    rating: 4.5,
    ratingCount: 14,
    offers: "10+",
    productId: "10591278217245559115",
    position: 4,
  },
  {
    title: 'Apple 10.2" iPad 9th Gen 64gb',
    source: "Best Buy",
    link: "https://www.bestbuy.com/site/apple-10-2-inch-ipad-9th-generation-with-wi-fi-64gb-space-gray/4901809.p?skuId=4901809&utm_source=feed",
    price: "$249.99",
    delivery: "Free shipping",
    imageUrl:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR6LcUqpg28PvkLaJ22md38QiQ1fgIhlRPjbBWuqpzw6x_iQD1K5wgwVAs24CNmHRPIHH6uo_DQ7OFwO69ZUSEHNhtoPOYUXFTnxbv6Y7w1JWwZR_9T9g&usqp=CAE",
    rating: 5,
    ratingCount: 507,
    offers: "20+",
    productId: "8536363455278739214",
    position: 5,
  },
  {
    title: "Apple iPhone 15 Pro Max - 256 GB - Black Titanium - Unlocked",
    source: "NFM",
    link: "https://www.nfm.com/apple-iphone-15-pro-max-256gb-black-titanium-65306276/65306276.html",
    price: "$1,199.99",
    delivery: "",
    imageUrl:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT04khSNRl3GomffWcQL7Drnou7HOGRSz6ii1xkMZGhiprOuNDiDjBAUiRqZD0f3zYfBHtd7I8Yh69IUkj0LbXe3QfPlkB9-6x3N7zKwIn9auUhM2mZFgU&usqp=CAE",
    rating: 4.5,
    ratingCount: 16,
    offers: "10+",
    productId: "12246794142336810986",
    position: 6,
  },
  {
    title: "Apple AirTag - 4 pack",
    source: "Walmart",
    link: "https://www.walmart.com/ip/Apple-AirTag-4-Pack/408992127?wmlspartner=wlpa&selectedSellerId=0",
    price: "$84.99",
    delivery: "Free shipping",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQkjDs9H80dgLJYfxT9UfKlUpJoClnolB7v785lMtcFtyPBFUV0QFgQPo0Qs6GXVgNNTCHVC4ZHf-kw8XO_mCPwuFoz-C82JuTYUMPfpQ&usqp=CAE",
    rating: 4.5,
    ratingCount: 448,
    offers: "20+",
    productId: "12071708327365188323",
    position: 7,
  },
  {
    title:
      "Apple Watch Series 9 45mm / Midnight Aluminum Case with Midnight Sport Band - M/L / GPS",
    source: "AT&T",
    link: "https://www.att.com/buy/wearables/apple-watch-series-9-45mm.html?source=E-g2s10000000000X&wtExtndSource=SWIS-",
    price: "$0.00 now",
    delivery: "Free shipping",
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQxzUB5eVwZxlQdAls949kvmxHy8jHsf6MQp48D0KMHCuhJUe8ZOFg7TzExM1o-GvJ_J-17TF_wwsy9svMfqVOHatKHSsEcxxWKgah8&usqp=CAE",
    rating: 5,
    ratingCount: 17,
    offers: "20+",
    productId: "4485580865932755878",
    position: 8,
  },
  {
    title: "Apple iPhone 15 Plus - 128 GB - Pink - T-Mobile",
    source: "T-Mobile",
    link: "https://www.t-mobile.com/cell-phone/apple-iphone-15-plus?sku=195949039980&srsltid=AfmBOoqDe9i34gRiQsJ4IZUi_cN2V2AGHArubESaWWj_7dOoTwDbo4vhJk8",
    price: "$929.99",
    delivery: "Free shipping",
    imageUrl:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQIfdp4UMMdhLksMRsd_XIEsyXc-YKUVdx3MPncXCBJuUrU2XwHNiIm-PsAX7SJItchgC8QAEf0PKXCkw49G4QZ6DqoT3KorcEPDa_P7jxylC6WsEmEWgs&usqp=CAE",
    rating: 4.5,
    ratingCount: 5,
    offers: "10+",
    productId: "5688352503976281465",
    position: 9,
  },
  {
    title: "24-Inch iMac with Apple M3 / 10-Core GPU Silver / 8GB / 256GB",
    source: "Arizona State University Bookstore",
    link: "https://www.bkstr.com/arizonastatestore/product/24-inch-imac-with-retina-4-5k-display--apple-m3-chip-with-8-core-cpu-and-10-core-gpu--256gb-ssd---silver-329795-1",
    price: "$1,399.00",
    delivery: "Free shipping",
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQnU__tXaFnE-N9aJuFIVJpScyGHZ_sCigVTRZqsb2LNDO7haVGZ1ZOosdlbdAbJa61t7KdAxMD9tW-aoqZ1wQoLzAag9YLbnEAuD3L0L9m8xvDixVZfg&usqp=CAE",
    rating: 5,
    ratingCount: 1,
    offers: "10+",
    productId: "11394089480219664976",
    position: 10,
  },
  {
    title: "1st Generation Apple Pencil",
    source: "Target",
    link: "https://www.target.com/p/apple-pencil-with-usb-c-adapter-2022-1st-generation/-/A-85963551?ref=tgt_adv_xsf&AFID=google&CPNG=Electronics&adgroup=57-0",
    price: "$79.99",
    delivery: "Free shipping",
    imageUrl:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcShdkg4yvjzeTcPZVOAWL5K87YXR173JAi8R83PeBUNx2OYpeCVvyp2hfSWmv59JqORb_TGtafUYtO9mJ8hIyZCfuxi4lruLZHYvUzqEmgBCqdhf4BSzQ&usqp=CAE",
    rating: 4.5,
    ratingCount: 7,
    offers: "10+",
    productId: "4080752513492827463",
    position: 11,
  },
  {
    title: "Apple iPad Air (M2, 2024) - 11-inch - Wi-Fi - 512 GB - Space Gray",
    source: "B&H Photo-Video-Audio",
    link: "https://www.bhphotovideo.com/c/product/1826710-REG/apple_muwl3ll_a_11_ipad_air_wi_fi.html?kw=APMUWL3LLA&ap=y&smp=Y&BI=7249&srsltid=AfmBOopSqLxrN7r3q559Wcsr_ZeQf-09xSPFW6GCRFGMAKijWJAdXjF3Its",
    price: "$844.00",
    delivery: "Free shipping",
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTy9E5AlKgw3yOvUr793dZkGn0KzsmOB2TEjCr2_0cVkqgDYYHMIcNLumWSbSzEpYisIj3PbZ734wGcIm8NleUqeX73EUXlQrX96MhH5EBV93XK21PawGY&usqp=CAE",
    rating: 5,
    ratingCount: 773,
    offers: "10+",
    productId: "12385059623847345036",
    position: 12,
  },
  {
    title: "Apple Pencil (2nd Generation), White",
    source: "Staples",
    link: "https://www.staples.com/apple-pencil-2nd-generation-white-mu8f2am-a/product_24431120",
    price: "$127.99",
    delivery: "Free shipping",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTyC3lIUJ7cZVgmYxf8DLNitnVfAXYK4g5g1EmtiJhpOo33GY0G6ZCT6ic2YGkRSTHQPqMNL9Zch-8fwf81PlN7Wx9b179VJbScj7taDtrA-zCLvjwlaA&usqp=CAE",
    rating: 4.5,
    ratingCount: 459,
    offers: "25+",
    productId: "3756453561031717355",
    position: 13,
  },
  {
    title: 'MacBook Air 15" M3 - 8GB Ram 256GB SSD - Space Gray - Apple',
    source: "PC Richard & Son",
    link: "https://www.pcrichard.com/apple-15-macbook-air-256gb-m3-space-gray/MRYM3LL-A.html?utm_source=google&utm_medium=organic&utm_campaign=free-shopping&srsltid=AfmBOoqKXzk2jKr4_PId2W_Z8bABhgh3Alk2mo8nRs7k6vJSAjuOpAdUPE8",
    price: "$1,169.00",
    delivery: "Free shipping",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRVlr9YGtzOkHjn1Avr_CklO6yPbQaEKJqs_DVLJWamhcc5IRyhvALGLuHG9JrhR_Z6OOPVucvhtwDNWD60wpV7YmfUJdOYCsBo32H4IU34mVrLlwIIjw&usqp=CAE",
    rating: 5,
    ratingCount: 928,
    offers: "10+",
    productId: "14574491698856016672",
    position: 14,
  },
  {
    title: "Apple TV 4K - 64 GB - Wi-Fi",
    source: "Verizon",
    link: "https://www.verizon.com/products/apple-tv-4k-wifi-with-64-gb-storage?sku=sku5710030",
    price: "$129.99",
    delivery: "Free shipping",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSZ8xskICfeYoLwPbWFabLxLz12gvpKZTsjlAjHcUuvn7zYiwtaNcG-JY3RQIGwNhdViamRRUWUobc0uGho8hBP2KrSn5VN-Q0bfB9hwatu8SIh3F5m5HA&usqp=CAE",
    rating: 5,
    ratingCount: 3,
    offers: "20+",
    productId: "1670693156704338088",
    position: 15,
  },
  {
    title: "Apple iPad Mini 64gb Wi-Fi - Space Gray",
    source: "DoorDash - Best Buy US",
    link: "https://www.doordash.com/product/4901902?utm_source=Google&utm_medium=PLA&utm_campaign=organic_product_listing&business_id=11630312&frt=13&srsltid=AfmBOopJQF_vKxRcWPAYPi5SjigZC1bZmLj3C3ZVl2B7wfwwDSogyfrnplE&region_id=26060177",
    price: "$499.99",
    delivery: "$5.99 shipping",
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSy9ANQYK8fPNaiRjBxYn-dJ5pPKIMVoTFIMTZ1Ch1QgGzP6bGVthXeHWCQcfPDNctE8rxkHCVX4UgMo05Nsef2c30i0Beqt35W0pM8lxrMv7tIQKciCuY&usqp=CAE",
    rating: 5,
    ratingCount: 13,
    offers: "20+",
    productId: "15231908767392796045",
    position: 16,
  },
  {
    title: "Apple iPhone 15 128GB Black",
    source: "Techinn.com",
    link: "https://www.tradeinn.com/techinn/en/apple-iphone-15-128gb-6.1/140370713/p?utm_source=google_products&utm_medium=merchant&id_producte=141273904&country=us&srsltid=AfmBOorhNe0IaNrWKimaxjR1ojPCJFe6SPTxtw0N_Y7Ox6ec7iASaL0_Op0",
    price: "$806.99",
    delivery: "$11.99 shipping",
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRWRZRJqEwvp0UC5cw0qy9gB3rOYZ7PwYyt3Q3doLxukNZQw8H7DzpXatRCoYbUxC9HrpojatAWPZErF4QfdOth1OA-qmdV2Hl1S7InsCZmPd4lyePBcJI&usqp=CAE",
    rating: 4.5,
    ratingCount: 14,
    offers: "4",
    productId: "1769083541353888713",
    position: 17,
  },
  {
    title: "Apple iPhone 14 Plus - 128 GB - Blue  - Unlocked",
    source: "The Device Depot",
    link: "https://thedevicedepot.com/products/apple-iphone-14-plus?variant=42902082617495&currency=USD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&srsltid=AfmBOooy1H2yQjwlT9v5nTwR2q-I4JdbXT8T27E4f-1qGeVNwN_eht2GsGM",
    price: "$691.00",
    delivery: "$8.00 shipping",
    imageUrl:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSrQskNfvZscw4DcAHqyjxgykPPoTOOiUSYtaehpp8k5bU4ElXypEKKfb8--Cty1aMumRt45i3mzmO4QjXfd1mYxZhMmLKtRWLxvzSj&usqp=CAE",
    rating: 4.5,
    ratingCount: 10,
    offers: "10+",
    productId: "13640959421988050292",
    position: 18,
  },
  {
    title: "Apple iPhone 14 - 128 GB - (PRODUCT)RED - Unlocked",
    source: "Gazelle Store",
    link: "https://buy.gazelle.com/products/iphone-14-128gb-unlocked-1?variant=41937841848373",
    price: "$440.99 refurbished",
    delivery: "Free shipping",
    imageUrl:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQaQ9oLzqFhydFSzq50vwK49ub5SZ5nmMfVEJnmzOhMOJbcUQemrNCrf_aAse59ikSftZN1XsanG40JR8hJN_rxDEtsYDxfrZAoqqGC&usqp=CAE",
    rating: 4.5,
    ratingCount: 22,
    offers: "10+",
    productId: "7182826459064401721",
    position: 19,
  },
  {
    title: "Apple iPhone 12 - 64 GB - Blue - Unlocked",
    source: "HSN",
    link: "https://www.hsn.com/products/seo/20078465?sz=6&sf=EC0422&ac=",
    price: "$1,079.99",
    delivery: "Free shipping",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQtNHlXHkap9EyZKyKHlFE1-LM_aLYmbRG6DjSIYiQgl2r7RzC5RAyWfNfnLiW-gt5PmP9WTT8RxU0FWvQjaC0TJS7JtYztNV5zTVkL&usqp=CAE",
    rating: 4.5,
    ratingCount: 41,
    offers: "10+",
    productId: "1237505408875900328",
    position: 20,
  },
  {
    title: "iPhone 13 - 128GB Pink - T-Mobile (with installment plan) - Apple",
    source: "Reebelo USA",
    link: "https://reebelo.com/products/apple-i-phone-13-128-gb-pink-fully-unlocked-premium-e4re9?utm_organicad=true&srsltid=AfmBOoqy1U4QKpF4auA2zGiQSawiaKRhRQ08TFA-n6LUPC15GwGvkFRzW6U",
    price: "$477.72 used",
    delivery: "Free shipping",
    imageUrl:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSnuz638Rea4uAYVQbQimXbAw112DBL8QX20_ZyOvVL_BQTCYc3lpFA-P8U7hSIbYLoJSUXHd4Kj738qS-eoxD2Z8Y-VgLLZYwy3Pj45ROOkzKsjBBnqQ&usqp=CAE",
    rating: 4.5,
    ratingCount: 49,
    offers: "10+",
    productId: "10391136812476697389",
    position: 21,
  },
  {
    title: 'Apple iPad Pro 12.9" 256GB Wi-Fi - Space Gray',
    source: "Best Buy",
    link: "https://www.bestbuy.com/site/apple-12-9-inch-ipad-pro-6th-generation-m2-chip-wi-fi-256gb-space-gray/5499300.p?skuId=5499300&utm_source=feed",
    price: "$899.00",
    delivery: "Free shipping",
    imageUrl:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQP6W0t9Y7D_inzcuqxnWn3TopOsqUJV6PQzUeMjDiGp6N1xNR0C9OdhLzzH7igzGPJfa9dKeEvUcE9u6LTxc0vndIbzsvM7VbRpWGSXwejB2as_sbdUAI&usqp=CAE",
    rating: 5,
    ratingCount: 10,
    offers: "10+",
    productId: "16566821586533519893",
    position: 22,
  },
  {
    title: 'MacBook Air 13" M3 - 8GB Ram 256GB SSD - Silver - Apple',
    source: "CDW",
    link: "https://www.cdw.com/product/apple-macbook-air-13-m3-8-gb-ram-256-gb-ssd-silver/7833189?cm_ven=acquirgy&cm_cat=google&cm_pla=NA-NA-Apple_NM&cm_ite=7833189",
    price: "$1,115.99",
    delivery: "$40.18 shipping",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRb9trYdHsNNfoSvjZzPJQHpN9_WVvD9PcccPeQ3SsuVbLXsHSv7kmeDUpT9WImb9EIwFWCoTXBZaW97_pe1bUL5oiCcgumMcnowrlFqrLoPMz9h7wdNQ&usqp=CAE",
    rating: 5,
    ratingCount: 1,
    offers: "10+",
    productId: "18259165511307036922",
    position: 23,
  },
  {
    title: "Apple - HomePod Mini - Blue",
    source: "Sam's Club",
    link: "https://www.samsclub.com/p/apple-homepod-mini/prod25170099?itemNumber=980375794",
    price: "$94.98",
    delivery: "$65.43 shipping",
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRl86zE6U1mloYDssTl4bnNLuqj1RmHzQWI_F4ig9T_gsgCABXFcmbzEuun5NPcAPvSJ3msyecpTTem5niJ2Z6QWc90uZ568F08Rf7Mg3Q0FTylcfgWAQ&usqp=CAE",
    rating: 4.5,
    ratingCount: 15,
    offers: "20+",
    productId: "15404269271535946432",
    position: 24,
  },
  {
    title:
      "Apple iPad Pro (M4, 2024) - 11-inch - Wi-Fi - 1 TB with standard glass - Space Black",
    source: "Expercom - Apple Premier Partner",
    link: "https://expercom.com/products/ipad-pro-11-inch-with-apple-m4?variant=42455010607138&currency=USD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&srsltid=AfmBOoq-NDkNsq4YOJKA47LTeQ07JLDkWy1Dae8l7fHJqlkmddWZ6bkGl78",
    price: "$1,599.00",
    delivery: "Free shipping",
    imageUrl:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRapQREUNQ15UDdGlzdx5GWodtMTlYPRFtarG7IuHy-E5s0DrpVn42WgMT1YaMgpbM1OfhQDZ2JZdSalV0SljLPkroIku5k56YLaCaPdroA1YC1lF5iL78&usqp=CAE",
    rating: 5,
    ratingCount: 1,
    offers: "10+",
    productId: "10541355347299899988",
    position: 25,
  },
  {
    title: "Apple 24-Inch Blue iMac with 4.5K Retina Display",
    source: "Back Market",
    link: "https://www.backmarket.com/en-us/p/mgpk3lla-na-na-ghz-ssd-1-gb-ram-1gb/99fd2b9f-18dc-4058-ba85-8b78dd7fe4be?shopping=gmc&srsltid=AfmBOooQyerHkzfrQkMQFnXZhOrvr7PsHu0RhtvVWN0iW3m5LSJDo0lSjmk",
    price: "$901.99 refurbished",
    delivery: "$7.99 shipping",
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTmvAbDXWgmzTXps2Im3uZWr1Rz-yju3t1L3JsRoqtuPxKaHPBAzKcQe9T6ONQlRaVXWlW9ebgCNP6xpThscg1V1RN8XC0p5aE1v4UuP6ug_hK_l-L8Eg&usqp=CAE",
    rating: 4.5,
    ratingCount: 1,
    position: 26,
  },
  {
    title: "Apple iMac 21.5 in FHD Intel Core i5 8GB 1TB Mmqa2",
    source: "NTC Tech",
    link: "http://www.ntc-tech.com/products/apple-imac-21-5-inch-core-i5-4570r-2-7ghz-8gb-ddr3-1tb-hdd?srsltid=AfmBOopTg2FkemBm5MRMdPaN9oOPT7fDpxOQSPQQ2brBUcMukFQdy2E-nj4",
    price: "$119.99 used",
    delivery: "Free shipping",
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTJFJKZOu7VYpRNzZP0BK4MktT0UKzjlStr5arcWixxx4f6QWp3XWI_zUWXvJCUwKaT3veHkaEjyw-bLW8aoxOQNMAU3AzBCiO0AyoYCZA6dXcSFy63xbk&usqp=CAE",
    rating: 4.5,
    ratingCount: 1,
    offers: "10+",
    productId: "155081757366246655",
    position: 27,
  },
  {
    title: "Apple iPhone 14 - Midnight - 128 GB - Unlocked",
    source: "Approovl",
    link: "https://approovl.com/product/apple-iphone-14-128gb-unlocked-midnight/",
    price: "$959.99",
    delivery: "Free shipping",
    imageUrl:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSw2CYLsBXFpX3uIOzWm9m_w57ydV__WEYUfD4QeH92kEIFQGAdzge2nZe1p0BIEZGrMTcD7mYIdNHsN1RQdpShEXYyhPZGeFkoTOWA&usqp=CAE",
    rating: 4.5,
    ratingCount: 22,
    offers: "10+",
    productId: "1882512495872140890",
    position: 28,
  },
  {
    title: "Apple iPhone 11 64gb Black",
    source: "Cheap iPhones & Samsungs",
    link: "https://www.star-wireless.com/products/iphone-11?variant=39908140154995&currency=USD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&srsltid=AfmBOoqM0m36IepaFQORNyYVD_nSwWOEisrzylHx_eqpsTrH66BDpEIp5uo",
    price: "$299.99",
    delivery: "$10.00 shipping",
    imageUrl:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSz9b4AadoXMcpmq4nfzJDwPDrhTSWTmiNaUMxCH8o0yb6jliBI9u5lGe_npdnFfBlhXzVDFTZKFCfOu9NS96C24y8GtNgCyc0B7oFpox-45j4jQDHobDo&usqp=CAE",
    rating: 4.5,
    ratingCount: 98,
    offers: "5+",
    productId: "3420222165130456892",
    position: 29,
  },
  {
    title:
      "2021 Apple 10.2-inch iPad Wi-Fi 64gb - Space Gray (9th Generation), Size: 256GB",
    source: "Walmart",
    link: "https://www.walmart.com/ip/2021-Apple-10-2-inch-iPad-Wi-Fi-64GB-Space-Gray-9th-Generation/483978365?wmlspartner=wlpa&selectedSellerId=0",
    price: "$249.00",
    delivery: "Free shipping",
    imageUrl:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSDvkFiKkB6-C_Og5wjdamcyDf_tNwkyCiL6dMuBBZwoiC36fEDHx1Gmw8jjoPVr7fL7nvuq6ER6rPPY9kekwbSNoGVOPvJOLfyVxdXpEHX0KpOjGuffEA&usqp=CAE",
    rating: 5,
    ratingCount: 507,
    position: 30,
  },
  {
    title:
      'Apple iMac MD093LL/A 21.5" All-in-One Computer - Intel Core i5 - 8GB Ram - 1TB HDD - Nvidia GeForce GT 640m - Os x 10.8 Mountain Lion',
    source: "PCLiquidations.com",
    link: "https://pcliquidations.com/p143268-apple-imac-a1418-21?variant=130968",
    price: "$179.99 refurbished",
    delivery: "$43.98 shipping",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQpaWlXEIPkxYNagaVw2W8p-y6213XGfmNVoGH4IIDEeoSdeEqKC3YwsB1wW7Iu3JzZULUnWY0TqYnybaJZ1zo_klr5_ee-omji5BE_96TdztwpifhGzg&usqp=CAE",
    rating: 4.5,
    ratingCount: 205,
    offers: "10+",
    productId: "16885212907066961655",
    position: 31,
  },
  {
    title: "Apple AirPods Max Space Gray Over Ear Headphones",
    source: "Shipt",
    link: "https://www.shipt.com/shop/products/9243831?srsltid=AfmBOooBgyGc1v9UrWtLmc3MUy9pamLgOzWOdn9G3inuJ1JUHgAkA9CDc-o&region_id=030376",
    price: "$549.00",
    delivery: "$10.00 shipping",
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRWIOZKpDXy7ZNXCIh8v38lFKjTWb3Hp_HAwx1J0sJwVexNwWxwk2cSjg_6VRYuoYUAWxYGjfoyh0YqVNvcC5F7-cKRu3hc_-Dhn1Q_ZEOcpXC3XEoOSbI&usqp=CAE",
    rating: 4.5,
    ratingCount: 20,
    offers: "20+",
    productId: "14353148713136312955",
    position: 32,
  },
  {
    title:
      'Apple 27" iMac with Retina 5K (512GB, Mid 2020) with AirPods Max and More',
    source: "eBay - 6ave",
    link: "https://www.ebay.com/itm/196285948758?chn=ps&mkevt=1&mkcid=28&srsltid=AfmBOoqy-apvLQ-Z7eqEMWSveqbWohc6nHbBcJ_TZObjTghhNC0BK-D3muU",
    price: "$2,194.95",
    delivery: "Free shipping",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTO61WkobCzj7NgYf2h-UWejiFt3-7bI85Ip6EstrV1eJ8pvtas2b91klE8FLA03S7jqYQuarvQTgVK1hcolvFODhuXW-HRXvOeg_ry75VVYQWgTQDvug&usqp=CAE",
    rating: 4.5,
    ratingCount: 872,
    position: 33,
  },
  {
    title: "Orange iMac - Apple",
    source: "Apple",
    link: "https://www.apple.com/us/shop/go/product/MQRY3?cid=aos-us-seo-pla-mac",
    price: "$1,699.00",
    delivery: "Free shipping",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQHtOQJRLokp8Z8Ps1nYN3cEe5g7k55l-ZMyzWnLPQ7D-wcXn2V2yIaGurwXt0afhgSiy1ptPMEK22Xp6dPFRHT3V9Iy1nBCOVA3eoe_LZ11y2STwxCXw&usqp=CAE",
    rating: 5,
    ratingCount: 1,
    position: 34,
  },
  {
    title: "Apple 21.5-inch iMac AIO Z0RR0LL/A iMac",
    source: "Atlas Computers & Electronics",
    link: "https://www.atlasce.ca/products/apple-imac-a1418-all-in-one-core-i7-4570r-2-7ghz-8g-1tb-hdd-21-5-late-2013?currency=CAD&variant=32014472282205&stkn=0d6d8ae1c91b&srsltid=AfmBOoqA2PCwhp71iGnG16VBu-eT-s4RTG_o3O9JWhYHatWHMWmsJBMdUxw",
    price: "$426.07 refurbished",
    delivery: "$18.78 shipping",
    imageUrl:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQMw-wyWNSsByAri_fkjaTIcPN6yM9LVqGM-WqNzQ6lhFZQ3IH-QR3TlixeQdQmfIzu-V9ns3mEEKvstB-Fl_nvImdrCzK82Uv6CPM0xmTCI3c_ToKofzE&usqp=CAE",
    offers: "5+",
    productId: "1633065215778750608",
    position: 35,
  },
  {
    title: "Apple MacBook Pro (16-inch, 16GB Ram, 512gb Storage) - Space Gray",
    source: "Amazon.com - Seller",
    link: "https://www.amazon.com/Apple-MacBook-16-inch-512GB-Storage/dp/B082P8N4KJ?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A2DVWSKPQ5IJJE",
    price: "$589.00 refurbished",
    delivery: "Free shipping",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS4NWYcpMmEZ2qqAt_YxCFsPliqGQZIel9rBIM4I3eSLfTv0roS7ARZ7OzJjeeDfktm_c4LyGufMC3cYFb_P-D-ldEHKIXjC1v1lAGUig&usqp=CAE",
    rating: 4.5,
    ratingCount: 1,
    position: 36,
  },
  {
    title: "Apple iPad Mini Wi-Fi + Cellular 64gb - Pink (6th Gen)",
    source: "Adorama",
    link: "https://www.adorama.com/acmlx43lla.html?refby=inc-google-shop-o",
    price: "$649.00",
    delivery: "Free shipping",
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRCGZit65pzNLWykJ9wEPjucd8KtG9IL5JoU8lAL_TqvuxkmnztJGvZTMoFevdEqltZEIoV4H9rjlOH7fpVHLPAmhoTKf3j-DgaliKPiKWWJ9zmGqJPz9A&usqp=CAE",
    rating: 5,
    ratingCount: 13,
    offers: "10+",
    productId: "17442494889073421871",
    position: 37,
  },
  {
    title: "MacBook Air M2 - 8GB Ram, 256GB SSD - Apple",
    source: "BrandsMart USA",
    link: "https://www.brandsmartusa.com/apple/254573/macbook-air-8gb-256gb-midnight.htm?srsltid=AfmBOoqtUNTHSlYDDhBTdpVE93efoZdD0f6A3NeA4hbToMRpIhsQyaPFF-w",
    price: "$899.00",
    delivery: "$11.12 shipping",
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQtLgdf4EGsM3WxgDCpWFGEsH_GUiXuoAysbGFu_LCGMM_IIEB037KC3_5kYB4SJGNow1w1RvgvEPz4RPtt8bOYLqRsmjS5tJF-mL9EXb3REA40qjeGYA&usqp=CAE",
    rating: 5,
    ratingCount: 18,
    offers: "10+",
    productId: "4038444917756773029",
    position: 38,
  },
  {
    title: "Apple iMac MC813LL/A",
    source: "eBay",
    link: "https://www.ebay.com/itm/314715748711?chn=ps&mkevt=1&mkcid=28",
    price: "$500.00 used",
    delivery: "$33.00 shipping",
    imageUrl:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSwfGod8fup_v-2L7AFwyg0UxbuwQ3YzdG9fdz_8SRBA6uv8-rkDzza93LG6ddOrRYuBmsrDTXkAP_BnNzQ31iAU0DQCkJV9yjBGs67yySwm0UsqpqYm-Y&usqp=CAE",
    rating: 4.5,
    ratingCount: 268,
    offers: "3",
    productId: "94566096202193581",
    position: 39,
  },
  {
    title: "Apple iPhone 14 Plus 256GB Midnight",
    source: "ngpstoreusa.com",
    link: "https://ngpstoreusa.com/apple-iphone-14-plus-dual-5g-256gb-6gb-ram-factory-unlocked-gsm-only-no-cdma---not-compatible-with-verizon/sprint---midnight/?setCurrencyId=1&sku=MF-0001-01086",
    price: "$1,203.50",
    delivery: "Free shipping",
    imageUrl:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSIcX0iA6c6BIdvZGVgwxe4ZbQ_IkHzdWZSHrEKuFZxuWdTxGg1mXFanzPNtUm3n_836ep-RVzUvRyULcsxMt-UG6p6LZY0MuzLzdTzhkhaxlOn5J_di5g&usqp=CAE",
    rating: 4.5,
    ratingCount: 10,
    offers: "4",
    productId: "11015995244062999363",
    position: 40,
  },
];

app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get("/data", (req, res) => {
  const { page } = req.query;
  const result = shopping.slice((page - 1) * 10, page * 10);
  return res.json({
    status: 200,
    data: result,
    pagination: {
      page,
      totalItem: shopping.length,
      totalPage: shopping.length / 10,
    },
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

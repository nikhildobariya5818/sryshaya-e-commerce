const moment = require("moment");

const html_template = `<!DOCTYPE html><html lang="en"> <head> <meta charset="UTF-8" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <meta http-equiv="X-UA-Compatible" content="ie=edge" /> <title>Static Template</title> <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" /> </head> <body style="margin: 0; font-family: 'Poppins', sans-serif; background: #ffffff; font-size: 14px;"> <div style=" max-width: 680px; margin: 0 auto; padding: 45px 30px 60px; background: #f4f7ff; background-image: url(https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661497957196_595865/email-template-background-banner); background-repeat: no-repeat; background-size: 800px 452px; background-position: top center; font-size: 14px; color: #434343; " > <header> <table style="width: 100%;"> <tbody> <tr style="height: 0;"> <td> <img alt="" src="https://lh3.googleusercontent.com/fife/ALs6j_EIss7d5gFrDFOjcitKbv1BluXt7MBFjGTaklxVJ7noy3KGlkBLIY-ZMRV_c-7dV8XunseuQGIN934D_tlVodMyCi99sgNG5sAdMLC_DP3Lqz4rK8nIYp7uxtYVBr-1wTtFV2h9Zg2dIE3jr81D-psE9hy_Zrj3Wt8OrHmvNirDxNJirQJvwBFYC9kGQcy_ByLBEUHLAIQkmIhDOfFJgX8nu67SJDUzmybYRTJkFaBWFK2IxCZwtjKBq1uyoDQLaSMXoiUXFSB-6JIAMxN2BHE9Y0pgb4yZOFJ52QzXmOndwXytmI_asoo02WcOFftdB2n8-9p-fYtvazLnr_aXo8Vg_Gc_NfO6k3JwfXTaFwu7ccotEQT5DfvTZTgPJyrP9fTa7y5SQF38_oIsSiyScx6kWviOtN-zRNlqASTPK2mZPBbPLz2z9Mhu6rPZVeMyTJEXv9dQ7klNxy2OGfob4Osarj2j7PN705NukcsLhjI0OSGDE-I8uhBQaTOfzGAp15ea86oVx_ypTujdWjDO-kbTiMZr7BGqKdQngIHUvvGRANLCwgMXOsOYbsB8dfdtrpxcYyEXJ_VdcmUeHsUCd229kepnQBTSfOcRoGB9E0npVrDEDfobtJkv0rlV2r0ohZxI0eQU3cXI4--eFcWo7st1ob2QLrDXPBx9nODo8QrZOwmyIzfQ98XV3NJDEYKMoCRl9VYs3z3D7B9VhkHy-CPrk1GlpcaDhTbZR1wYVVXQWZTZ_28jD4RwuDRykztv48ADzYAJigVwZ44jdfNkmmRTkI7YnSBWV-DzG6vhDnNVxxlT0S0PtkESGhjnpLv1EhP-g3c54xBe88mHru2whBiRJdMATpo_3sVlY8FJBcOYdwK05jOurO_RK2-85WoGDkGgRGsMX8dLuoFXXy6NsmqDNmlzkPofkDo1WXW46WGUJQvubhZI5N27VtOptC-3lpJsgqHGBS5P5TtkZseOGG1qeCy9xFBADkZ-WJ7tNBPYe156-_GO6ImlO3PEnRdN9Wxkk6Tgbgv-cFkFLKc44mYdaS_BUA4plvKnfj3-StgTnZIrAxdV9-uivvJBg6XUMYSF4f27UnKgVgG3LcF1WBiYJrzbtFVVsthUPFfPkd1Q4RQT1qSIZ4DDNPvc4lPhQoQ284l-Y4kie9aIThbriLy-gI2DEBvjYuJOUspYidizxP1Dk6FTtyJrkY8uZWyqCMwkn6U3js0pTTJJF0GUd35X2Wk6Ctu_q2jZ-GTK5-BdFNfbj0F0wRgAM0LOdUEoC1TX3q4-p_JU1f9XyHZj4OTdCxaOM2CEmMl5Kznx6MkJ7YV06dHmpHkmAema5nOMSwJsB8T0yuJTQ0eLdrsqQ-dcKKVJJU5ThXjgveCFVK-5-vnEVoKAYNCmZDYnCPxaJdf3QmaCv-_94KAn2Qv0fT3qvXtqD9PlCcXhRbKDNmlIXujFXnqB8Xv00AOffj5X8WT1iqF3sYUhQVHiFuf0P4VfsPgTtEDDhoSQVRV1bSxMleyPRPDxUdFnEIc8W_Sv6Pyrfndkm5bq6-tJgSdsjclNFs48es1PkzQGwCRWoi3giAp34LaRamwGHrmF3DSGIBmZgkk28tgWQhK6XQ=w1920-h953" height="60px" style="filter: brightness(0) invert(1);" /> </td> <td style="text-align: right;"> <span style="font-size: 16px; line-height: 30px; color: #ffffff;">{{currentDate}}</span> </td> </tr> </tbody> </table> </header> <main> <div style="margin: 0; margin-top: 70px; padding: 92px 30px 115px; background: #ffffff; border-radius: 30px; text-align: center;"> <div style="width: 100%; max-width: 489px; margin: 0 auto;"> <h1 style="margin: 0; font-size: 24px; font-weight: 500; color: #1f1f1f;"> Your OTP </h1> <p style="margin: 0; margin-top: 17px; font-size: 16px; font-weight: 500;"> Hey {{EmailName}}, </p> <p style="margin: 0; margin-top: 17px; font-weight: 500; letter-spacing: 0.56px;"> Thank you for choosing Sryshaya Company. Use the following OTP to complete the procedure to change your email address. OTP is valid for <span style="font-weight: 600; color: #1f1f1f;">5 minutes</span>. Do not share this code with others, including Archisketch employees. </p> <p style="margin: 0; margin-top: 60px; font-size: 40px; font-weight: 600; letter-spacing: 25px; color: #ba3d4f;"> {{otp}} </p> </div> </div> <p style="max-width: 400px; margin: 0 auto; margin-top: 90px; text-align: center; font-weight: 500; color: #8c8c8c;"> Need help? Ask at <a href="mailto: support@sryshaya.com" style="color: #499fb6; text-decoration: none;"> support@sryshaya.com</a> or visit our <a href="" target="_blank" style="color: #499fb6; text-decoration: none;">Help Center</a> </p> </main> <footer style="width: 100%; max-width: 490px; margin: 20px auto 0; text-align: center; border-top: 1px solid #e6ebf1;"> <p style="margin: 0; margin-top: 40px; font-size: 16px; font-weight: 600; color: #434343;"> Sryshaya Company </p> <p style="margin: 0; margin-top: 8px; color: #434343;"> Address : 321, 3rd Floor, Silver Business Hub, Bapa Sitaram Chowk, Nr. Yogi Chowk, Simada, surat-395006 </p> <div style="margin: 0; margin-top: 16px;"> <a href="" target="_blank" style="display: inline-block;"> <img width="36px" alt="Facebook" src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661502815169_682499/email-template-icon-facebook" /> </a> <a href="" target="_blank" style="display: inline-block; margin-left: 8px;"> <img width="36px" alt="Instagram" src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661504218208_684135/email-template-icon-instagram" /> </a> <a href="" target="_blank" style="display: inline-block; margin-left: 8px;"> <img width="36px" alt="Twitter" src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661503043040_372004/email-template-icon-twitter" /> </a> <a href="" target="_blank" style="display: inline-block; margin-left: 8px;"> <img width="36px" alt="Youtube" src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661503195931_210869/email-template-icon-youtube" /> </a> </div> <p style="margin: 0; margin-top: 16px; color: #434343;"> Copyright © ${moment().format("YYYY")} Sryshaya. All rights reserved. </p> </footer> </div> </body></html>`

module.exports = html_template;
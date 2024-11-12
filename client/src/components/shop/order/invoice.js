const mailInvoice = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: 'Reset Password OTP',
    html: `
<div class="bg-white p-8 w-[800px] mx-auto my-12 shadow-lg">
    <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold">Invoice</h1>
        <div>
            <p class="font-semibold">02/01/2015</p>
            <p class="text-sm">invoicebus.com</p>
        </div>
    </div>
    <div class="grid grid-cols-2 gap-8 mb-8">
        <div>
            <h2 class="font-semibold mb-2">Dino Store</h2>
            <p class="text-sm">227 Cobblestone Road</p>
            <p class="text-sm">5500 Bedrock, Cobblestone County</p>
            <p class="text-sm">+555-123-456</p>
            <p class="text-sm">hello@dinosaurbed.com</p>
        </div>
        <div>
            <h2 class="font-semibold mb-2">Bill to:</h2>
            <p class="text-sm">Slate Rock and Gravel Company</p>
            <p class="text-sm">222 Bedway</p>
            <p class="text-sm">30000 Bedrock, Cobblestone County</p>
            <p class="text-sm">+555-123-5555</p>
            <p class="text-sm">fred@slaterockgravelbed.com</p>
            <p class="text-sm">Attn: Fred Flintstone</p>
        </div>
    </div>
    <div class="mb-4">
        <div class="flex justify-between mb-2">
            <div class="text-sm font-semibold">Total:</div>
            <div class="text-sm">$2560.05</div>
        </div>
        <div class="flex justify-between mb-2">
            <div class="text-sm font-semibold">Net Due Date:</div>
            <div class="text-sm">01/22/2015</div>
        </div>
        <div class="flex justify-between">
            <div class="text-sm font-semibold">P.O.#:</div>
            <div class="text-sm">13-147</div>
        </div>
    </div>
    <div class="mb-8">
        <h3 class="font-semibold mb-2">Terms &amp; Notes</h3>
        <p class="text-sm mb-1">Fred, thank you very much. We really appreciate your business.</p>
        <p class="text-sm">Please send payments before the due date.</p>
    </div>
    <div class="relative w-full overflow-auto">
        <table class="w-full caption-bottom text-sm">
            <thead class="[&amp;_tr]:border-b">
                <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <th
                        class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[50%]">
                        Item</th>
                    <th
                        class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                        Quantity</th>
                    <th
                        class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                        Price</th>
                    <th
                        class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                        Discount</th>
                    <th
                        class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                        Tax</th>
                    <th
                        class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                        LineTotal</th>
                </tr>
            </thead>
            <tbody class="[&amp;_tr:last-child]:border-0">
                <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">1. Frozen Brontosaurus
                        Ribs</td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">2</td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">$1.20</td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">2%</td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">$4.80</td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">$24.00</td>
                </tr>
                <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">2. Mammoth Chops</td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">14</td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">$1.75</td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">-10%</td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">5%</td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">$220.50</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="mt-8">
        <div class="flex justify-between mb-2">
            <div class="text-sm font-semibold">SUBTOTAL:</div>
            <div class="text-sm">$2445.00</div>
        </div>
        <div class="flex justify-between mb-2">
            <div class="text-sm font-semibold">TAX 1:</div>
            <div class="text-sm">(2%) $48.90</div>
        </div>
        <div class="flex justify-between mb-2">
            <div class="text-sm font-semibold">TAX 2:</div>
            <div class="text-sm">(5%) $110.25</div>
        </div>
        <div class="flex justify-between mb-2">
            <div class="text-sm font-semibold">TOTAL:</div>
            <div class="text-sm">$2560.05</div>
        </div>
        <div class="flex justify-between mb-2">
            <div class="text-sm font-semibold">PAID:</div>
            <div class="text-sm">$0.00</div>
        </div>
        <div class="flex justify-between mb-2">
            <div class="text-sm font-semibold">AMOUNT DUE:</div>
            <div class="text-sm">$2560.05</div>
        </div>
    </div>
    <div class="mt-8">
        <h3 class="font-semibold mb-2">Payment details:</h3>
        <p class="text-sm">ACC123007505 • BANKUS0000006545 • SWIFTBOML</p>
        <p class="text-sm mt-4">Currency: USD</p>
    </div>
</div>` }
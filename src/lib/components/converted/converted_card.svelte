<script>
    export let data;
</script>

<div class="flex justify-between items-center drop-shadow-xl shadow-[inset 0 -2.66px 2.66px 0 #CCCCCC] bg-white rounded-lg">
    <div class="square-button p-3 rounded-lg bg-white drop-shadow-xl shadow-inner">
        <img src="/pdf.png" alt="" class="h-16">
    </div>
    <div class="relative flex-1 flex justify-center">
        <img src="/right-arrow.png" alt="">
        <p class="absolute top-1/2 -translate-y-1/2 text-[#959595]">{data.desc}</p>
    </div>
    <div class="square-button p-3 rounded-lg bg-white drop-shadow-xl shadow-inner">
        <img src="/pdf.png" alt="" class="h-16">
    </div>
</div>
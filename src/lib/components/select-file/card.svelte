<script>
    export let data;
    let data_= {
        'google-drive': {
            title: "Google Drive",
            img: "/google-drive.png"
        },
        'drop-box': {
            title: "Drop Box",
            img: "/dropbox.png"
        },
        'device': {
            title: "My File",
            img: "file.png"
        }
    }

    
</script>

<div class="flex items-center justify-between bg-white shadow-xl rounded-lg">
    <h2 class="text-xl font-bold pl-5">{data_[data.option].title}</h2>
    <div class="p-4 shadow-xl rounded-xl">
        <img src={data_[data.option].img} alt="">
    </div>
</div>
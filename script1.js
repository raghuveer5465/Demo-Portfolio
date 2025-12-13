document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    let TitleValue = document.getElementById("Title").value;
    let NameValue = document.getElementById("Name").value;
    let ViewsValue = document.getElementById("views").value;
    let TimeValue = document.getElementById("time").value;
    let DurationValue = document.getElementById("duration").value;
    let fileInput = document.getElementById("thumbnail");
    let file = fileInput.files[0];
    let ThumbnailValue = URL.createObjectURL(file);
    console.log
        (
            `Title : ${TitleValue},
     Channel Name : ${NameValue},
     Views : ${ViewsValue},
     Time Ago : ${TimeValue}, 
     Duration : ${DurationValue},
     Thumbnail : ${ThumbnailValue}`
        );
    let formData = {
        Title: TitleValue,
        Name: NameValue,
        views: ViewsValue,
        time: TimeValue,
        duration: DurationValue,
        thumbnail: ThumbnailValue,
    }
    let oldData = localStorage.getItem("form");
    let formArray = oldData ? JSON.parse(oldData) : [];
    formArray.push(formData);
    if (formArray.length > 10) {
        formArray.shift();
    }
    localStorage.setItem("form", JSON.stringify(formArray));
    CreateCard(
        TitleValue,
        NameValue,
        ViewsValue,
        TimeValue,
        DurationValue,
        ThumbnailValue,
    );
    console.log("Saved : ", formArray);
    document.getElementById("form").reset();
});
// CreateCard
function CreateCard(Title, Name, views, time, duration, thumbnail) {
    let viewNumber;
    if (views < 1000) {
        viewNumber = views;
    } else if (views < 1000000) {
        viewNumber = (views / 1000).toFixed(1) + 'K';
    } else {
        viewNumber = (views / 1000000).toFixed(1) + 'M';
    }
    let html = `<div class="card">
            <div id="image">
                <video 
                src="${thumbnail}"
                controls
                muted>
            </video>
                <div class="duration">${duration}</div>
            </div>
            <div id="text">
                <h1>${Title}</h1>
                <p>${Name}, ${viewNumber} views, ${time} months ago</p>
            </div>
        </div>`;
    document.querySelector(".container1").innerHTML += html;
};  
function btnCVFunction()
{
    document.getElementById("cv").hidden = false;
    document.getElementById("contact").hidden = true;
    document.getElementById("video").hidden = true;
    document.getElementById("image").hidden = true;
}

function btnPhotosFunction()
{
    document.getElementById("cv").hidden = true;
    document.getElementById("contact").hidden = true;
    document.getElementById("video").hidden = true;
    document.getElementById("image").hidden = false;
}

function btnContactFunction()
{
    document.getElementById("cv").hidden = true;
    document.getElementById("contact").hidden = false;
    document.getElementById("video").hidden = true;
    document.getElementById("image").hidden = true;
}

function btnVideoFunction()
{
    document.getElementById("cv").hidden = true;
    document.getElementById("contact").hidden = true;
    document.getElementById("video").hidden = false;
    document.getElementById("image").hidden = true;
}
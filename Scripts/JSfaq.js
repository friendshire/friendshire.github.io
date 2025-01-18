        function showContent(contentNumber) {
            // Скрываем все div с классом content1
            const allContents = document.querySelectorAll('.content1');
            allContents.forEach(div => div.style.display = 'none');
            allContents.forEach(div => div.classList.remove('active1'));


            // Показываем выбранный div
            const selectedContent = document.getElementById(`content${contentNumber}`);
            if (selectedContent) {
                selectedContent.style.display = 'block';
                selectedContent.classList.add('active1');

            }
        }

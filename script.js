sessionStorage.setItem('CUSTOM_EVENT_DATASET', JSON.stringify({
            "service": service,
          }));

<script>
    function changeUrl(title, url) {
        if (typeof (history.pushState) != "undefined") {
            var obj = { Title: title, Url: url };
            history.pushState(obj, obj.Title, obj.Url);
        } else {
            alert("Browser does not support HTML5.");
        }
    }

    $(function () {
      $('body').on('click', '.open-sevice', function (ev) {
        ev.preventDefault();
        let title = $(this).data('title');
        let service = $(this).data('service');
        changeUrl(title, $(this).data('href'));
        $('#current-page').html(title);

        if (service.length > 0) {
          sessionStorage.setItem('CUSTOM_EVENT_DATASET', JSON.stringify({
            "service": service,
          }));
        } else {
          sessionStorage.setItem('CUSTOM_EVENT_DATASET', JSON.stringify({}));
        }
      });

              sessionStorage.setItem('CUSTOM_EVENT_DATASET', JSON.stringify({}));
          });
  </script>

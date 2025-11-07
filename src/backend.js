exports.httpHandler = {
  endpoints: [
    {
      scope: "user",
      method: "GET",
      path: "flag",
      handle: function handle(ctx) {
        ctx.response.json({ flag: !!ctx.user.extensionProperties.flag });
      },
    },
    {
      scope: "user",
      method: "POST",
      path: "flag",
      handle: function handle(ctx) {
        const { flag } = ctx.request.json();

        try {
          ctx.user.extensionProperties.flag = !!flag;
        } catch (error) {
          ctx.response.json({ success: false, error: error.message });
        }

        ctx.response.json({ success: true });
      },
    },
    {
      scope: "user",
      method: "GET",
      path: "page-size",
      handle: function handle(ctx) {
        ctx.response.json({
          pageSize: ctx.user.extensionProperties.pageSize,
        });
      },
    },
    {
      scope: "user",
      method: "POST",
      path: "page-size",
      handle: function handle(ctx) {
        const { pageSize } = ctx.request.json();

        try {
          ctx.user.extensionProperties.pageSize = pageSize;
        } catch (error) {
          ctx.response.json({ success: false, error: error.message });
        }

        ctx.response.json({ success: true });
      },
    },
  ],
};

import { useEffect } from "react";

type Props = {
  identifier: string;
  url: string;
};

const DisqusComments = ({ identifier, url }: Props) => {
  useEffect(() => {
    if ((window as any).DISQUS) {
      (window as any).DISQUS.reset({
        reload: true,
        config: function () {
          this.page.identifier = identifier;
          this.page.url = url;
        },
      });
    } else {
      (window as any).disqus_config = function () {
        this.page.url = url;
        this.page.identifier = identifier;
      };

      const d = document;
      const s = d.createElement("script");

      s.src = "https://avengers-blog.disqus.com/embed.js";
      s.id = "dsq-embed-scr";
      s.setAttribute("data-timestamp", Date.now().toString());

      d.body.appendChild(s);
    }
  }, [identifier, url]);

  return <div id="disqus_thread"></div>;
};

export default DisqusComments;
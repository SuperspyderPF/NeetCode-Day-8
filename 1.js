const numberOfLines = (w, s) =>[...s].map(c => w[c.charCodeAt(0) - 97]).reduce((acc, curr) => [acc[0] + (100 < acc[1] + curr ? 1 : 0),100 < acc[1] + curr ? curr : acc[1] + curr,
      ],
      [s.length ? 1 : 0, 0],
    );
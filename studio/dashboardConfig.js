export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d488b78a9b13345209a4376',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-rfz3ocra',
                  apiId: '789361af-e6c2-44d5-a7de-4d402b7cd312'
                },
                {
                  buildHookId: '5d488b78e9a6661f940fefbf',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-to7fxvmo',
                  apiId: 'bff58d50-3941-4ee2-b9ab-9a8951432f45'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/blinksmith/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-to7fxvmo.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

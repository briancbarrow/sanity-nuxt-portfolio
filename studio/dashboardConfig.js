export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-portfolio-studio',
                  apiId: '9bf65fa4-4ad6-404a-8806-338a5c8f3fd8'
                },
                {
                  buildHookId: '5fd7f02233bc9300d9b676a4',
                  title: 'Events Website',
                  name: 'sanity-nuxt-portfolio',
                  apiId: '20ce5605-2ac2-4a02-87af-d91903dee480'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/briancbarrow/sanity-nuxt-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-portfolio.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}

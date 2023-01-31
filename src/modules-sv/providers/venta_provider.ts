import{DataBase} from 'typeorm';

export ventaProviders=[
    {
        pricide: RepositoryEnum.PRODUCT_REPOSITORY,
        useFactory: (dataSource:DataSource)=>
        dataSource.getRepository(ProductEntity),
        INJECT:[dataSourceEnum.PG_DATA_SOURCE]
    }
    {
        pricide: RepositoryEnum.CATEGORY_REPOSITORY,
        useFactory: (dataSource:DataSource)=>
        dataSource.getRepository(CategoryEntity),
        INJECT:[dataSourceEnum.PG_DATA_SOURCE]
    }

]
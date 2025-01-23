markdown
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

## Descripción

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Requisitos previos

- Node.js (versión 14 o superior)
- npm (versión 6 o superior)

## Instalación del CLI de NestJS
Para instalar el CLI de NestJS globalmente, ejecuta el siguiente comando:

```bash
npm install -g @nestjs/cli
```

### Para verificar la instalación, ejecuta:

```bash
nest --version
```
## @nestjs/config dotenv

para obtener las variables de un .env, esto permitio agregar en archivo con las cables de Mysql que nos entrego cliente.

```bash
npm install @nestjs/config dotenv --legacy-peer-deps
```

# ts-node

para ejecutar una seed (semilla) y precargar datos en la tabla

```bash
npm install -g ts-node
```


# Instalación

```bash
npm install --legacy-peer-deps
```



## Configuración del proyecto
Asegúrate de tener configuradas las variables de entorno necesarias en un archivo .env en la raíz del proyecto.

### Comandos útiles
Compilar y ejecutar el proyecto
bash
# desarrollo
```bash
npm run start
```
## modo watch
```bash
npm run start:dev
```

## Generar recursos
```bash
nest g resource product
```

# Generar una consulta en GrafhQL

en el Navegador pones el siguiente link:

http://localhost:3000/graphql


## Query bases category_type

cada una realiza una consulta especifica adjunt ejemplos:

```bash
#GetAll()
query {
  categoryTypes {
    id
    name
  }
}

#GetById
query {
  categoryType(id: 1) {
    id
    name
  }
}

#crear nuevo
Crear Nuevo
mutation {
  createCategoryType(name: "newCategory") {
    id
    name
  }
}

```

## Query bases category_type

cada una realiza una consulta especifica category:

```bash
#GetAll()
query {
  categories {
    id
    category
    categoryType {
      id
      name
    }
  }
}

#GetById
  query {
    category(id: 1) {
      id
      category
      categoryType {
        id
        name
      }
    }
  }

#actualizar un regsirto en category
mutation {
  updateCategory(updateCategoryInput: { id: 1, category: "Updated Category", categoryTypeId: 2 }) {
    id
    category
    categoryType {
      id
      name
    }
  }
}

#CREAR category
mutation {
  createCategory(createCategoryInput: { category: "Updated Category", categoryTypeId: 2 }) {
    id
    category
    categoryType {
      id
    }
  }
}

#eliminar
mutation {
  removeCategory(id: 1)
}

```


## Query bases subcategory

cada una realiza una consulta especifica subcategory:

```bash
#select all
query {
  subcategories {
    id_subcategory
    subcategory
    id_category
  }
}

# updatedate
mutation {
  updateSubcategory(updateSubcategoryInput: {
    id_subcategory: 1,
    subcategory: "Subcategoría Actualizada",
    id_category: 2
  }) {
    id_subcategory
    subcategory
    id_category
  }
}

# create
mutation {
  createSubcategory(createSubcategoryInput: {
    subcategory: "Nueva Subcategoría",
    id_category: 1
  }) {
    id_subcategory
    subcategory
    id_category
  }
}

# remove
mutation {
  removeSubcategory(id: 1)
}


# selectbyid
query {
  subcategory(id: 1) {
    id_subcategory
    subcategory
    id_category
  }
}

```

## Query Base Supplier-Subcategory

querys para crud

```bash
# insert
mutation {
  createSupplierSubcategory(createSupplierSubcategoryInput: {
    id_category: 1,
    id_subcategory: 1,
    id_supplier: 1
  }) {
    id_supplier_subcategory
    id_category
    id_subcategory
    id_supplier
  }
}

# update
mutation {
  updateSupplierSubcategory(updateSupplierSubcategoryInput: {
    id_supplier_subcategory: 1,
    id_category: 2,
    id_subcategory: 2,
    id_supplier: 1
  }) {
    id_supplier_subcategory
    id_category
    id_subcategory
    id_supplier
  }
}

# select all
query {
  supplierSubcategories {
    id_supplier_subcategory
    id_category
    id_subcategory
    id_supplier
  }
}

# getbyid
query {
  supplierSubcategory(id: 1) {
    id_supplier_subcategory
    id_category
    id_subcategory
    id_supplier
  }
}

# delete
mutation {
  removeSupplierSubcategory(id: 3)
}



```

## Query bases supplier

cada una realiza una consulta especifica supplier:

```bash
#busqueda con Paginación
query {
  suppliersWithPagination(take: 20, skip: 0, field: "rut", order: "ASC", q: "") {
    data {
      id_supplier
      rut
      business_name
      business_line
      brand_name
      additional_info
      link
      size
      sales
      isActive
      isDeleted
      created_at
      modified_at
      slug
      ID_company
      ID_authorizations
    }
    count
  }
}

#Insert
mutation {
  createSupplier(createSupplierInput: {
    rut: "113345678-9",
    business_name: "Office Supplies",
    business_line: "Oficina",
    brand_name: "OfficeSupplies",
    additional_info: "Material de oficina y papelería",
    link: "https://officesupplies.com",
    size: "Mediana",
    sales: "2200000",
    isActive: true,
    isDeleted: false,
    slug: "office-supplies",
    ID_company: 1,
    ID_authorizations: 11
  }) {
    id_supplier
    rut
    business_name
    business_line
    brand_name
    additional_info
    link
    size
    sales
    isActive
    isDeleted
    slug
    ID_company
    ID_authorizations
  }
}


# update
mutation {
  updateSupplier(updateSupplierInput: {
    id_supplier: 1,
    rut: "98765432-1",
    business_name: "Mi Empresa Actualizada",
    business_line: "Tecnología",
    brand_name: "Mi Marca Actualizada",
    additional_info: "Información adicional actualizada",
    link: "https://miempresaactualizada.com",
    size: "Grande",
    sales: "2000000",
    isActive: true,
    isDeleted: false,
    created_at: "2025-01-01T00:00:00Z",
    modified_at: "2025-01-01T00:00:00Z",
    slug: "mi-empresa-actualizada",
    ID_company: 1,
    ID_authorizations: 1
  }) {
    id_supplier
    rut
    business_name
    business_line
    brand_name
    additional_info
    link
    size
    sales
    isActive
    isDeleted
    created_at
    modified_at
    slug
    ID_company
    ID_authorizations
  }
}

#select all
query {
  suppliers {
    id_supplier
    rut
    business_name
    business_line
    brand_name
    additional_info
    link
    size
    sales
    isActive
    isDeleted
    created_at
    modified_at
    slug
    ID_company
    ID_authorizations
  }
}


# getbyid
query {
  supplier(id: 1) {
    id_supplier
    rut
    business_name
    business_line
    brand_name
    additional_info
    link
    size
    sales
    isActive
    isDeleted
    created_at
    modified_at
    slug
    ID_company
    ID_authorizations
  }
}

# remove
mutation {
  removeSupplier(id: 1)
}


```

## Query bases authorizations

cada una realiza una consulta especifica authorizations:

```bash
#Insert
mutation {
  createAuthorizations(createAuthorizationsInput: {
    statement_of_truth: false,
    notifications: false,
    data_management: true,
    terms_and_conditions: true,
    created_at: "2025-01-01T00:00:00Z",
    modified_at: "2025-01-01T00:00:00Z"
  }) {
    id_authorizations
    statement_of_truth
    notifications
    data_management
    terms_and_conditions
    created_at
    modified_at
  }
}

# update
mutation {
  updateAuthorizations(updateAuthorizationsInput: {
    id_authorizations: 1,
    statement_of_truth: false,
    notifications: false,
    data_management: false,
    terms_and_conditions: false,
    created_at: "2025-01-01T00:00:00Z",
    modified_at: "2025-01-01T00:00:00Z"
  }) {
    id_authorizations
    statement_of_truth
    notifications
    data_management
    terms_and_conditions
    created_at
    modified_at
  }
}

# remove
mutation {
  removeAuthorizations(id: 1)
}

getall()
query {
  authorizations {
    id_authorizations
    statement_of_truth
    notifications
    data_management
    terms_and_conditions
    created_at
    modified_at
  }
}

# getbyid
query {
  authorization(id: 1) {
    id_authorizations
    statement_of_truth
    notifications
    data_management
    terms_and_conditions
    created_at
    modified_at
  }
}


```

## Query bases contact

cada una realiza una consulta especifica contact:

```bash
#prueba de errores
mutation {
  createContact(createContactInput: {
    name: "NombreMuyLargoQueSuperaElLimiteDeCienCaracteresNombreMuyLargoQueSuperaElLimiteDeCienCaracteresNombreMuyLargoQueSuperaElLimiteDeCienCaracteres",
    phone: "1234567890123456",  # Más de 15 caracteres
    email: "correo@mail.com",  # No es un correo electrónico válido
    position: "",  # Campo vacío
    type: "",  # Campo vacío
    auth_id: 0,  # Campo vacío
    id_supplier: 0  # Campo vacío
  }) {
    id_contact
    name
    phone
    email
    position
    type
    auth_id
    id_supplier
  }
}

# insert
mutation {
  createContact(createContactInput: {
    name: "John Doe",
    phone: "123456789",
    email: "john.doe@example.com",
    position: "Manager",
    type: "ventas",
    auth_id: 1,
    id_supplier: 1
  }) {
    id_contact
    name
    phone
    email
    position
    type
    auth_id
    id_supplier
  }
}

# update
mutation {
  updateContact(updateContactInput: {
    id_contact: 1,
    name: "Jane Doe",
    phone: "987654321",
    email: "jane.doe@example.com",
    position: "Director",
    type: "facturación",
    auth_id: 1,
    id_supplier: 1
  }) {
    id_contact
    name
    phone
    email
    position
    type
    auth_id
    id_supplier
  }
}

# remove
mutation {
  removeContact(id: 1)
}


# select all 
query {
  contacts {
    id_contact
    name
    phone
    email
    position
    type
    auth_id
    id_supplier
  }
}

# getbyid
query {
  contact(id: 1) {
    id_contact
    name
    phone
    email
    position
    type
    auth_id
    id_supplier
  }

 # getbyidsupplier 
}query {
  contactsBySupplier(id_supplier: 1) {
    id_contact
    name
    email
    phone
    position
    type
    auth_id
    id_supplier
  }
}




```


# Query Base de type_criteria
```bash
#insert
mutation {
  createTypeCriteria(createTypeCriteriaInput: {
    type: "legal"
  }) {
    id_type_criteria
    type
  }
}

# Select all
query {
  typeCriterias {
    id_type_criteria
    type
  }
}

# select get by id
query {
  typeCriteria(id_type_criteria: 1) {
    id_type_criteria
    type
  }
}

#ESTE NO FUNCIONA
mutation {
  updateTypeCriteria(updateTypeCriteriaInput: {
    id_type_criteria: 1,
    type: "nuevo_tipo"
  }) {
    id_type_criteria
    type
  }
}

# delete
mutation {
  removeTypeCriteria(id_type_criteria: 5)
}

```

# Query Base de criteria
```bash
# insert
mutation {
  createCriteria(createCriteriaInput: {
    id_type_criteria: 1,
    title: "Criterio 1",
    description: "Descripción del Criterio 1",
    standard: "Estándar 1"
  }) {
    id_criteria
    id_type_criteria
    title
    description
    standard
    created_at
    modified_at
  }
}

# select all
query {
  criteria {
    id_criteria
    id_type_criteria
    title
    description
    standard
    created_at
    modified_at
  }
}

# getbyid
query {
  criteriaById(id_criteria: 1) {
    id_criteria
    id_type_criteria
    title
    description
    standard
    created_at
    modified_at
  }
}

# delete 
mutation {
  removeCriteria(id_criteria: 4)
}

```
# QUERY Supplier_criteria
Crear un nuevo SupplierCriteria
```bash
mutation {
  createSupplierCriteria(createSupplierCriteriaInput: {
    id_criteria: 1,
    id_compliance_level: 2,
    id_checkerfiles: 3,
    detail: "Detalle del criterio del proveedor",
    datasource: "externo",
    id_supplier: 4
  }) {
    id_supplier_criteria
    id_criteria
    id_compliance_level
    id_checkerfiles
    detail
    datasource
    updated_at
    id_supplier
  }
}
Obtener todos los SupplierCriteria
bash
query {
  supplierCriterias {
    id_supplier_criteria
    id_criteria
    id_compliance_level
    id_checkerfiles
    detail
    datasource
    updated_at
    id_supplier
  }
}
Obtener un SupplierCriteria por ID
bash
query {
  supplierCriteria(id: 1) {
    id_supplier_criteria
    id_criteria
    id_compliance_level
    id_checkerfiles
    detail
    datasource
    updated_at
    id_supplier
  }
}
Actualizar un SupplierCriteria
bash
mutation {
  updateSupplierCriteria(updateSupplierCriteriaInput: {
    id_supplier_criteria: 1,
    detail: "Detalle actualizado del criterio del proveedor",
    datasource: "interno"
  }) {
    id_supplier_criteria
    id_criteria
    id_compliance_level
    id_checkerfiles
    detail
    datasource
    updated_at
    id_supplier
  }
}
Eliminar un SupplierCriteria
bash
mutation {
  removeSupplierCriteria(id: 1)
} 
```
# Query Base para compliance-level
```bash
# insert
mutation {
  createComplianceLevel(createComplianceLevelInput: {
    level: "en proceso",
    description: "Descripción del en proceso"
  }) {
    id_compliance_level
    level
    description
  }
}

# select all
query {
  complianceLevels {
    id_compliance_level
    level
    description
  }
}

# getbyid
query {
  complianceLevel(id: 1) {
    id_compliance_level
    level
    description
  }
}


# remove
mutation {
  removeComplianceLevel(id: 4)
}

```




# modo producción
```bash
npm run start:prod
```

Ejecutar pruebas
bash
# pruebas unitarias
```bash
npm run test
```

# pruebas e2e
```bash
npm run test:e2e
```

# cobertura de pruebas
```bash
npm run test:cov
```



# GIT 

```bash
git status
```

```bash
git add .
```

```bash
git commit -m "Comentario para commit"
```

```bash
git push
```
# 
const knex = require('../settings/knex');

module.exports = ({
                      name = "name",
                      tblName = "tableName",
                      selectableProps = [],
                      timeout = 1000
                  }) => {
    const create = (props) => {
        delete props.id;

        return knex
            .insert(props)
            .returning(selectableProps)
            .into(tblName)
            .timeout(timeout);
    }

    const findAll = () => {
        return knex.select(selectableProps).from(tblName).timeout(timeout).orderBy('id', 'desc');
    }

    const findByFilter = (filters) => {
        return knex.select(selectableProps).from(tblName).where(filters);
    }

    const findById = (id) => {
        return knex
            .select(selectableProps)
            .from(tblName)
            .where({id})
            .timeout(timeout);
    }

    const update = (id, props) => {
        delete props.id;

        return knex.update(props).from(tblName).where({id}).timeout(timeout);
    }

    const unlink = (id) => {
        return knex.del().from(tblName).where({id}).timeout(timeout);
    }

    return {
        name,
        tblName,
        selectableProps,
        timeout,
        create,
        findAll,
        findByFilter,
        findById,
        update,
        unlink,
    }
};

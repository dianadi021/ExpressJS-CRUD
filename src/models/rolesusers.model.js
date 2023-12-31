/** @format */

const mongoose = require('../apps/connect');

const RolesUsersSchema = mongoose.Schema(
  {
    rolename: { type: String, required: true },
    rolelevel: { type: Number, required: true },
  },
  { timestamps: true },
  {
    writeConcern: {
      w: 'majority',
      j: true,
      wtimeout: 1000,
    },
  },
);
const RolesUsersModel = mongoose.model('RolesUsers', RolesUsersSchema);

const FormatInputRolesUsers = {
  rolename: 'String',
  rolelevel: 'Number',
};

module.exports = {
  RolesUsersModel,
  FormatInputRolesUsers
};

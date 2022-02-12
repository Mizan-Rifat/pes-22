<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Spatie\Permission\Models\Role;

class RoleController extends Controller {

    public function index() {
        return Role::all();
    }

    public function store(Request $request) {
        Validator::make($request->all(), [
            'name' => [
                'required', 'string',
                Rule::unique(Role::class)
            ],
        ])->validate();


        $role = Role::create(['name' => $request->name]);
        return $role;
    }


    public function show(Role $role) {
        return $role;
    }

    public function update(Request $request, Role $role) {
        //
    }


    public function destroy(Role $role) {
        $role->delete();
    }
}
